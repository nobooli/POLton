<template>
	<div>
		<div class="drooping_banner"></div>
		<Header :banner_image="banner"></Header>

		<div class="tent" data-aos="zoom-in">
			<img :src="tent" :srcset="tent_srcset" :sizes="tent_sizes" />
		</div>
		<div data-aos="fade-down">
			<div class="navi-zains">
				<v-hover class="navi-zain">
					<a
						href="https://www.youtube.com/channel/UCK9V2B22uJYu3N7eR_BT9QA"
						id="flag-zain"
					>
						<img
							:src="hovered_zain === -1 ? flag_hover : flag_idle"
							@mouseover="hovered_zain = -1"
							@mouseleave="hovered_zain = null"
							:srcset="hovered_zain === -1 ? flag_srcset_hover : flag_srcset"
							:sizes="zain_sizes"
							class="jumping-zain"
						/>
					</a>
				</v-hover>
				<v-hover class="navi-zain" v-for="(link, i) in links" :key="i">
					<router-link :to="link.link">
						<img
							:id="link.id"
							:src="hovered_zain === i ? link.img_hover : link.img"
							@mouseover="hovered_zain = i"
							@mouseleave="hovered_zain = null"
							:srcset="hovered_zain === i ? link.srcset_hover : link.srcset"
							:sizes="zain_sizes"
							class="jumping-zain"
						/>
					</router-link>
				</v-hover>
			</div>
		</div>
		<div class="ticket_card">
			<h3 class="title_text" style="margin-bottom:0px;">
				<span>{{ $t("ui.scrollingTitle") }}</span>
				<!-- <span>{{ $t("link.soundboard") }}</span> -->
			</h3>
		</div>
	</div>
</template>

<script>
import AOS from "aos";
import Header from "../components/Header";

export default {
	components: {
		Header,
	},
	data: function() {
		return {
			banner: "img/omapol_1shuu.png",
			// title_text: "Welcome",

			hovered_zain: null,
			zain_sizes: "(max-width: 600px) 75px, (max-width: 1280px) 150px, 300px",
			flag_idle: "img/flag_idle_300.png",
			flag_hover: "img/flag_hover_300.png",
			flag_srcset:
				"img/flag_idle_75.png 75w, img/flag_idle_150.png 150w, img/flag_idle_300.png 300w",
			flag_srcset_hover:
				"img/flag_hover_75.png 75w, img/flag_hover_150.png 150w, img/flag_hover_300.png 300w",
			tent: "img/TEMT_WITH_BOWS_1000.png",
			tent_srcset:
				"img/TEMT_WITH_BOWS_250.png 250w, img/TEMT_WITH_BOWS_500.png 500w, img/TEMT_WITH_BOWS_800.png 800w",
			tent_sizes: "(max-width: 600px) 250px, (max-width: 1280px) 500px, 800px",
			links: [
				{
					// trivia quiz
					link: "/Messages",
					img: "img/letter_idle_300.png",
					img_hover: "img/letter_hover_300.png",
					id: "letter-zain",
					srcset:
						"img/letter_idle_75.png 75w, img/letter_idle_150.png 150w, img/letter_idle_300.png 300w",
					srcset_hover:
						"img/letter_hover_75.png 75w, img/letter_hover_150.png 150w, img/letter_hover_300.png 300w",
				},
				{
					// gallery
					link: "/Presents",
					img: "img/gallery_idle_300.png",
					img_hover: "img/gallery_hover_300.png",
					id: "gallery-zain",
					srcset:
						"img/gallery_idle_75.png 75w, img/gallery_idle_150.png 150w, img/gallery_idle_300.png 300w",
					srcset_hover:
						"img/gallery_hover_75.png 75w, img/gallery_hover_150.png 150w, img/gallery_hover_300.png 300w",
				},
				{
					// soundboard
					link: "/Soundboard",
					img: "img/megaphone_idle_300.png",
					img_hover: "img/megaphone_hover_300.png",
					id: "megaphone-zain",
					srcset:
						"img/megaphone_idle_75.png 75w, img/megaphone_idle_150.png 150w, img/megaphone_idle_300.png 300w",
					srcset_hover:
						"img/megaphone_hover_75.png 75w, img/megaphone_hover_150.png 150w, img/megaphone_hover_300.png 300w",
				},
				{
					// Quiz
					link: "/quiz",
					img: "img/quiz_idle_300.png",
					img_hover: "img/quiz_hover_300.png",
					id: "quiz-zain",
					srcset:
						"img/quiz_idle_75.png 75w, img/quiz_idle_150.png 150w, img/quiz_idle_300.png 300w",
					srcset_hover:
						"img/quiz_hover_75.png 75w, img/quiz_hover_150.png 150w, img/quiz_hover_300.png 300w",
				},
			],
		};
	},
	methods: {
		topOfPage() {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth",
			});
		},
		AOSInit() {
			this.aos = AOS;
			this.aos.init({
				duration: 1000,
				disable: "mobile",
			});
			// Slightly expensive to bind to all images, adjust the filter as needed
			const images = document.querySelectorAll('img')
			images.forEach((elem) => {
				elem.addEventListener('load', () => {
					this.aos.refresh();
				});
			});
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.AOSInit();
		});
	},
};
</script>

<style>
.drooping_banner {
	width: 100vw;
	height: 5rem;
	position: absolute;
	left: 50%;
	right: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	background-image: url("/POLton/img/banner-tile.png");
	background-repeat: repeat-x;
	background-size: contain;
}

@media screen and (min-width: 600px) {
	.drooping_banner {
		height: 7.5rem;
	}
}

@media screen and (min-width: 960px) {
	.drooping_banner {
		height: 10rem;
	}
}

.welcome-message {
	word-break: keep-all;
}

.ticket_card {
	/* this will be the border + shape */
	position: relative;
	background: white;
	border: 2em solid #bb2830;
	border-radius: 0.3rem;
	padding: 0.5rem 0;
	box-shadow: 0 1px 2px #f8ee9e23, 0 2px 4px #f8ee9e23, 0 4px 8px #f8ee9e23,
		0 8px 16px #f8ee9e23, 0 16px 32px #f8ee9e23, 0 32px 64px #f8ee9e23;
}

/* dot pattern on the border */
.ticket_card:after {
	content: "";
	position: absolute;
	top: -1.25em;
	left: -1.25em;
	right: -1.25em;
	bottom: -1.25em;
	border: 1em dotted white;
	border-image-source: url("/POLton/img/border_dot.svg");
	border-image-slice: 33% 33%;
	border-image-repeat: round;
	filter: drop-shadow(0 0 4px white);
}

.title_text {
	margin: auto;
	white-space: nowrap;
	overflow: hidden;
	width: 100%;
	color: #7c1a1f;
	font-weight: 900;
	font-size: 3em;
}

.title_text span {
	display: inline-block;
	padding-left: 100%;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	animation-name: title_text;
}

@media screen and (max-width: 599px) {
	.title_text span {
		animation-duration: 12s;
	}
}

@media screen and (min-width: 600px) {
	.title_text span {
		animation-duration: 14s;
	}
}

@media screen and (min-width: 960px) {
	.title_text span {
		animation-duration: 16s;
	}
}

@media screen and (min-width: 1280px) {
	.title_text span {
		animation-duration: 20s;
	}
}

@media screen and (min-width: 1920px) {
	.title_text span {
		animation-duration: 24s;
	}
}

@keyframes title_text {
	100% {
		transform: translateX(-100%);
	}
}

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

.navi-zains {
	margin-top: -5em;
	flex-wrap: wrap;
}

@media screen and (min-width: 600px) {
	.navi-zains {
		margin-top: -10em;
	}
}
@media screen and (min-width: 960px) {
	.navi-zains {
		margin-top: -10em;
	}
}
@media screen and (min-width: 1280px) {
	.navi-zains {
		margin-top: -20em;
	}
}

.navi-zains,
.tent {
	display: flex;
	align-items: center;
	justify-content: center;
}

.tent { margin-top: -12.5% }
</style>
