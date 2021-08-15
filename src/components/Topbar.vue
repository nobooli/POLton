<template>
	<v-app-bar
		app
		:color="night"
		dark
		:elevate-on-scroll="$vuetify.breakpoint.mdAndUp"
	>
		<v-menu transition="slide-y-transition" bottom offset-y>
			<template v-slot:activator="{ on: menu }">
				<v-app-bar-nav-icon v-on="menu" v></v-app-bar-nav-icon>
			</template>
			<v-list>
				<v-list-item :to="{ name: 'Main' }">
					<v-list-item-title>
						<v-icon left color="secondary">mdi-home</v-icon>
						{{ $t("link.home") }}
					</v-list-item-title>
				</v-list-item>
				<v-list-item :to="{ name: 'Soundboard' }">
					<v-list-item-title>
						<v-icon left color="secondary">mdi-volume-source</v-icon>
						{{ $t("link.soundboard") }}
					</v-list-item-title>
				</v-list-item>
				<v-list-item :to="{ name: 'Presents' }">
					<v-list-item-title>
						<v-icon left color="secondary">mdi-gift</v-icon>
						{{ $t("link.presents") }}
					</v-list-item-title>
				</v-list-item>
				<v-list-item :to="{ name: 'Messages' }">
					<v-list-item-title>
						<v-icon left color="secondary">mdi-email-outline</v-icon>
						{{ $t("link.messages") }}
					</v-list-item-title>
				</v-list-item>
				<v-list-item :to="{ name: 'Quiz' }">
					<v-list-item-title>
						<v-icon left color="secondary">mdi-clipboard-text-outline</v-icon>
						{{ $t("link.quiz") }}
					</v-list-item-title>
				</v-list-item>
				<v-list-item 
					href="">
						<v-icon left color="secondary">mdi-gift</v-icon>
						{{ $t("link.present") }}
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item
					href="https://www.youtube.com/channel/UCK9V2B22uJYu3N7eR_BT9QA"
				>
					<v-list-item-title>
						<v-icon left color="secondary">mdi-youtube</v-icon>
						{{ $t("link.channel") }}
					</v-list-item-title>
				</v-list-item>
				<v-list-item href="https://www.nepolabo.fans">
					<v-list-item-title>
						<v-icon left color="secondary" class="clover">mdi-clover</v-icon>
						{{ $t("link.nplb") }}
					</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
		<div class="bgm_slider">
			<v-slider
				id="bgm-slider"
				v-model="volume"
				label="BGM"
				:disabled="this.disabled"
				:prepend-icon="
					this.volume
						? this.volume < 33
							? 'mdi-volume-low'
							: this.volume < 66
							? 'mdi-volume-medium'
							: 'mdi-volume-high'
						: 'mdi-volume-off'
				"
				:append-icon="this.pausedOrEnded ? 'mdi-play' : 'mdi-pause'"
				@input="
					(newVolume) => {
						this.audio.volume = newVolume / 100;
					}
				"
				@click:prepend="
					() => {
						if (!isNaN(this.volume) && this.volume > 0) {
							// mute
							previousVolume = this.volume;
							this.volume = audio.volume = 0;
							audio.volume = 0;
						} else {
							// unmute
							this.volume = previousVolume;
							audio.volume = previousVolume / 100;
						}
					}
				"
				@click:append="
					() => {
						if (audio.paused) {
							audio.play();
							pausedOrEnded = false;
						} else {
							audio.pause();
							pausedOrEnded = true;
						}
					}
				"
			>
			</v-slider>
		</div>
		<pwa-update></pwa-update>
		<v-spacer />
		<v-menu transition="slide-y-transition" bottom offset-y>
			<template v-slot:activator="{ on: menu }">
				<v-fab-transition>
					<v-btn v-on="menu" fab icon>
						<v-icon>mdi-earth</v-icon>
					</v-btn>
				</v-fab-transition>
			</template>
			<v-list>
				<v-list-item
					v-for="(lang, i) in langs"
					:key="i"
					:disabled="!lang.isready"
					@click="changeLang(lang.src)"
				>
					<v-list-item-title>{{ lang.title }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
		<v-snackbar color="success" v-model="snackbarCopy">
			<span>{{
				$t("ui.copiedToClipboard", { value: $store.state.lastAudio })
			}}</span>
			<template v-slot:action="{ attrs }">
				<v-btn color="#bb2830" text v-bind="attrs" @click="snackbarCopy = false"
					>Close</v-btn
				>
			</template>
		</v-snackbar>
	</v-app-bar>
</template>

<script>
import { copyToClipboard } from "@/common/clipboard";
import store from '@/store';

export default {
	props: {
		value: {
			type: Boolean,
		},
	},
	data: () => ({
		snackbarCopy: false,
		langs: [
			{ title: "English", src: "en", isready: true },
			//{ title: "简体中文", src: "zhHans", isready: false },
			{ title: "日本語", src: "ja", isready: true },
		],
		audio: new Audio("bgm/BGM.mp3"), // change to appropriate BGM file
		volume: 5,
		previousVolume: 0,
		fromRoute: null,
		toRoute: null,
		pausedOrEnded: false,
		disabled: false,
		state: store.state,
		noBgmStart: false
	}),
	watch: {
		$route() {
			if (this.$route.name === "Soundboard") {
				this.audio.volume = 0;
				this.disabled = true;
			} else {
				this.audio.volume = this.volume / 100;
				this.disabled = false;
			}
		},
		state: function() {
			if (this.noBgmStart !== !store.state.playBgmOnCurtains) {
				this.noBgmStart = !this.noBgmStart;
			}
		}
	},
	mounted() {
		this.noBgmStart = this.$store.state.playBgmOnCurtains;
		this.$root.$on("no_preloader_bgm", () => {
			this.noBgmStart = true;
		})

		this.audio.preload = true;
		this.audio.loop = true;
		this.audio.volume = this.volume / 100;

		if (this.noBgmStart) { 
			this.pausedOrEnded = true; 
			return; 
		}
		this.$root.$on("preloader_start_bgm", () => {
			if (this.audio.paused || this.audio.ended) {
				this.pausedOrEnded = true;
				this.audio.play();
				this.pausedOrEnded = this.audio.paused;
			} else {
				this.pausedOrEnded = false;
			}
		});
	},
	methods: {
		changeLang(e) {
			this.$i18n.locale = e;
			this.$cookies.set("Lang", e);
		},
		darkMode() {
			this.$store.commit("change_dark_mode");
			this.$vuetify.theme.dark = this.$store.state.dark_mode;
		},
		see(e) {
			window.location.href = e;
		},
		copyLastAudio() {
			copyToClipboard(this.$store.state.lastAudio);
			this.snackbarCopy = true;
		},
	},
	computed: {
		darkmodeicon: {
			get: function() {
				return this.$store.state.dark_icon;
			},
		},
		night: {
			get: function() {
				if (this.$vuetify.theme.dark) {
					return "grey darken-4";
				} else {
					return "primary";
				}
			},
		},
		playBgmOnCurtains: {
			get: function() {
				return this.$store.state.playBgmOnCurtains;
			}
		}
	},
};
</script>

<style>
.clover {
	transform: rotateY(0deg) rotate(45deg);
}

.bgm_slider {
	margin-top: 20px;
	width: clamp(12rem, 30%, 25rem);
}

.bgm_credit {
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
