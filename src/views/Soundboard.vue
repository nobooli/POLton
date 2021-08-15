<template>
	<v-container>
		<Header :banner_image="banner"></Header>
		<section
			class="sound-section"
			v-for="group in voices"
			:key="group.name"
			data-aos="fade-up"
		>
			<v-card class="pa-0">
				<v-card-title class="sound-section-title">{{
					resolveI18n(group.translation)
				}}</v-card-title>
				<v-container>
					<v-row no-gutters>
						<v-btn
							class="ma-2 btn soundboard-btn"
							v-for="voice in group.voicelist"
							:key="voice.name"
							raised
							color="secondary"
							@click="play(voice)"
							>{{ resolveI18n(voice.translation) }}</v-btn
						>
					</v-row>
				</v-container>
			</v-card>
		</section>

		<v-dialog v-model="orderdialog" max-width="800">
			<v-toolbar dark color="primary">
				<v-btn icon dark @click="(orderdialog = false), stopplay()">
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<v-toolbar-title>{{ $t("ui.orderplaymode") }}</v-toolbar-title>
				<v-spacer></v-spacer>
			</v-toolbar>
			<v-card class="pa-1">
				<v-toolbar dense>
					<v-text-field
						hide-details
						single-line
						:value="playlistUrl"
						readonly
					></v-text-field>

					<v-btn icon @click="copyPlaylist">
						<v-icon>mdi-content-copy</v-icon>
					</v-btn>
				</v-toolbar>
				<p class="title font-weight-blod">{{ $t("ui.orderlistnow") }}</p>
				<v-chip
					v-for="(selected, index) in orderlist"
					:key="'list' + index"
					class="ma-2"
					close
					color="secondary"
					text-color="white"
					@click:close="deletelist(index)"
					@click="playOnly(selected)"
					>{{ resolveI18n(selected.translation) }}
				</v-chip>
				<v-switch
					class="ml-3 mt-2"
					v-model="repeatmode"
					inset
					color="secondary"
					:label="$t('ui.repeatmode')"
				>
				</v-switch>
				<v-card-actions v-if="orderlist.length > 0">
					<v-btn raised color="primary" @click="orderplay">{{
						$t("ui.playthislist")
					}}</v-btn>
					<v-btn text color="secondary" @click="stopplay">{{
						$t("ui.stopplay")
					}}</v-btn>
					<v-divider></v-divider>
					<v-btn text color="red" @click="resetorder">{{
						$t("ui.resetorder")
					}}</v-btn>
				</v-card-actions>
				<p v-else>{{ $t("ui.listempty") }}</p>
			</v-card>
		</v-dialog>
		<div
			id="control-bar"
			:class="this.$vuetify.theme.dark ? 'dark-mode' : 'light-mode'"
		>
			<div id="volume-bar">
				<v-slider
					id="volume_slider"
					class="pt-4 ml-4"
					v-model="volume"
					:label="this.$t('ui.volume')"
					thumb-label
					max="100"
					min="0"
					dense
					:prepend-icon="
						this.volume
							? this.volume < 33
								? 'mdi-volume-low'
								: this.volume < 66
								? 'mdi-volume-medium'
								: 'mdi-volume-high'
							: 'mdi-volume-off'
					"
					@input="
						(newVolume) => {
							audio.volume = newVolume / 100;
						}
					"
					@click:prepend="
						() => {
							if (!isNaN(this.volume) && this.volume > 0) {
								previousVolume = this.volume;
								this.volume = audio.volume = 0;
								audio.volume = 0;
							} else {
								this.volume = previousVolume;
								audio.volume = previousVolume / 100;
							}
						}
					"
					:append-icon="
						!audio.src
							? 'mdi-play-outline' // don't play if none set
							: audio.ended && audio.paused
							? 'mdi-replay'
							: audio.paused
							? 'mdi-play'
							: 'mdi-pause'
					"
					@click:append="
						() => {
							if (!audio.src) {
								return;
							}
							if (audio.paused || audio.ended) {
								// an ended audio element will start over
								audio.play();
							} else {
								audio.pause();
							}
						}
					"
				></v-slider>
			</div>
			<div id="control-btns">
				<v-switch
					class="mr-3"
					v-model="orderplaymode"
					inset
					color="secondary"
					:label="$t('ui.openorderplaymode')"
				></v-switch>
				<v-btn :disabled="!orderplaymode" icon @click="orderdialog = true">
					<v-badge
						color="secondary"
						:content="orderlist.length"
						:value="orderlist.length"
						overlap
					>
						<v-icon>mdi-reorder-horizontal</v-icon>
					</v-badge>
				</v-btn>
				<v-btn
					:disabled="!$store.state.lastAudio"
					icon
					@click="$store.dispatch('copyLastAudioToClipboard')"
				>
					<v-icon>mdi-content-copy</v-icon>
				</v-btn>
			</div>
		</div>
	</v-container>
</template>

<script>
import voicelist from "../assets/voices.json";
import Header from "../components/Header";

import { copyToClipboard } from "@/common/clipboard";

import AOS from "aos";

// var audio = new Audio();
var playlistAudio = new Audio();
var i = 0;
export default {
	components: {
		Header,
	},
	data: () => ({
		banner: "img/polbotan.png",
		voices: voicelist.groups,
		orderplaymode: false,
		orderdialog: false,
		orderlist: [],
		audio: new Audio(),
		repeatmode: false,
		arrysize: 0,
		volume: 50,
		previousVolume: 0,
		muted: false,
	}),
	beforeRouteLeave: function(to, from, next) {
		if (!this.audio.paused) {
			this.audio.pause();
		}
		return next();
	},
	mounted() {
		this.$nextTick(() => {
			this.AOSInit();
		});

		for (const [gIndex, group] of Object.entries(voicelist.groups)) {
			for (const [vIndex, voice] of Object.entries(group.voicelist)) {
				voice.key = `${gIndex},${vIndex}`;
			}
		}

		const playlist = this.$route.query.playlist;
		if (playlist) {
			this.orderplaymode = true;
			playlist // push each parameter from the GET request into orderList
				.split(";")
				.map((v) => v.split(","))
				.forEach(([gIndex, vIndex]) => {
					this.orderlist.push(voicelist.groups[gIndex].voicelist[vIndex]);
				});
			this.orderdialog = true;
		}
	},
	computed: {
		playlistUrl() {
			var url = window.location.origin + window.location.pathname;
			// build GET request
			var finalUrl = `${url}?playlist=${this.orderlist.reduce(
				(r, k) => `${!r ? r : r + ";"}${k.key}`,
				""
			)}`;
			return finalUrl;
		},
	},
	methods: {
		resolveI18n(obj) {
			return obj[this.$i18n.locale];
		},
		play(item) {
			if (this.orderplaymode) {
				//判断序列播放
				this.orderlist.push(item);
				window.console.log(this.orderlist);
			}

			this.audio.preload = true;
			this.audio.src = "voices/" + item.path;
			this.$store.commit("setLastAudio", this.audio.src);
			this.voice = item;
			this.audio.volume = this.volume / 100;
			this.audio.play();
		},
		playOnly(item) {
			// this.audio = new Audio();
			this.audio.src = "voices/" + item.path;
			this.audio.preload = true;
			this.voice = item;
			this.audio.play();
		},
		deletelist(i) {
			//删除序列中的一个值
			this.orderlist.splice(i, 1);
		},
		orderplay() {
			i = 0;
			playlistAudio = new Audio();
			// this.audio = new Audio();
			let arry = this.orderlist;
			let repeat = this.repeatmode;
			playlistAudio.preload = true;
			playlistAudio.loop = false;
			playlistAudio.src = "voices/" + arry[i].path;
			playlistAudio.volume = this.volume / 100;
			playlistAudio.play();
			playlistAudio.addEventListener(
				"ended",
				() => {
					//序列播放实现
					i++;
					if (i < arry.length) {
						playlistAudio.src = "voices/" + arry[i].path;
						//window.console.log(i);
						playlistAudio.play();
					} else {
						if (repeat && i === arry.length) {
							//不要停不下来啊
							i = 0;
							playlistAudio.src = "voices/" + arry[i].path;
							playlistAudio.play();
						}
					}
				},
				false
			);
		},
		copyPlaylist() {
			copyToClipboard(this.playlistUrl);
		},
		resetorder() {
			this.orderlist = [];
		},
		stopplay() {
			playlistAudio.pause();
		},
		AOSInit() {
			this.aos = AOS;
			this.aos.init({
				duration: 750,
				disable: "mobile",
			});
		},
	},
};
</script>

<style>
.a {
	text-decoration: none;
}

.btn {
	max-width: 100%;
	word-wrap: break-word !important;
	word-break: break-all !important;
	white-space: normal !important;
	text-transform: none !important;
	display: inline-block;
}

.sound-section {
	margin-bottom: 2rem;
}

#control-bar {
	bottom: 0;
	position: sticky;
	display: flex;
	/* background-color: #1E1E1E; */
	width: 100%;
	flex-direction: column;
}

div .dark-mode {
	background-color: #1e1e1e;
}
div .light-mode {
	background-color: #ffffff;
}

.sound-section-title {
	color: #7c1a1f;
	font-size: 1.25em;
	font-weight: 600;
}

#volume-bar {
	flex: 1;
}

#volume-bar > .v-input__slider,
#control-btns {
	margin-right: 16px;
}

#control-btns {
	display: flex;
	justify-content: center;
	align-items: center;
}

.soundboard-btn > span {
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}

@media (min-width: 801px) {
	#control-bar {
		flex-direction: row;
	}
	#volume-bar {
		padding-right: 15px;
	}
}
</style>
