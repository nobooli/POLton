<template>
	<v-app id="app">
		<v-btn large class="preloader-volume-toggle"
			id="bgmToggleButton"
			@click="toggleBgmAutoPlay()">
				{{ this.bgmStart ? "BGM On" : "BGM Off" }}
		</v-btn>
		<div class="preloader preloader-left"></div>
		<div class="preloader preloader-right"></div>
		<Topbar></Topbar>
		<main>
			<v-content app>
				<router-view></router-view>
			</v-content>
		</main>
		<Footer></Footer>
	</v-app>
</template>

<script>
import Topbar from "./components/Topbar.vue";
import Footer from "./components/Footer.vue";
import store from "@/store";

export default {
	name: "App",

	components: {
		Topbar,
		Footer,
	},

	data: () => ({
		gotop: false,
		prompt: false,
		deferred: null,
		addtoscreendialog: false,
		links: [],
		showSidebar: false,
		loaded: false,
		state: store.state,
		bgmStart: true,
		curtainsOpen: false
	}),
	mounted() {
		// let timeNow = new Date();
		// let hours = timeNow.getHours();
		// if (hours < 6 || hours > 18) {
		// 	this.$store.commit("change_dark_mode");
		// 	this.$vuetify.theme.dark = this.$store.state.dark_mode;
		// }
		window.onbeforeinstallprompt = (e) => {
			this.prompt = true;
			this.deferred = e;
		};
		window.addEventListener("scroll", this.handleScroll, true);
		if (this.$cookies.isKey("Lang")) {
			this.$i18n.locale = this.$cookies.get("Lang");
		}
		const preloaders = document.querySelectorAll('.preloader')
		preloaders.forEach((elem) => {
			elem.addEventListener('click', (event) => {
				if (this.bgmStart) {
					this.$root.$emit("preloader_start_bgm");
				}
				this.openCurtains(event.target);
			})
		});
		document.addEventListener('scroll', () => {
			if (this.bgmStart && !this.curtainsOpen) {
				this.$root.$emit("preloader_start_bgm");
			}
			if (!this.curtainsOpen) {
				this.openCurtains(preloaders);
			}
		})
	},
	methods: {
		handleScroll() {
			let scrolltop =
				document.documentElement.scrollTop || document.body.scrollTop;
			scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
		},
		toTop() {
			let top = document.documentElement.scrollTop || document.body.scrollTop;
			// 实现滚动效果
			const timeTop = setInterval(() => {
				document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
				if (top <= 0) {
					clearInterval(timeTop);
				}
			}, 10);
		},
		See(e) {
			window.location.href = e;
		},
		openCurtains(e) {
			if (e.length === 2) { // Scrolling
				e.forEach((curtain) => {
					if (!curtain.classList.contains("page-loaded")) {
						curtain.classList.toggle("page-loaded");
					}
				});
			} else if (e.classList.contains("preloader-left") && !e.classList.contains("page-loaded")) {
				var rightCurtain = document.getElementsByClassName("preloader-right")[0];
				rightCurtain.classList.toggle('page-loaded');
				e.classList.toggle('page-loaded');
			} else if (!e.classList.contains("page-loaded")) { // we clicked right curtain
				var leftCurtain = document.getElementsByClassName("preloader-left")[0];
				leftCurtain.classList.toggle('page-loaded');
				e.classList.toggle('page-loaded');
			}
			document.getElementsByClassName("preloader-volume-toggle")[0].classList.toggle('hide-preloader-volume-toggle');
			// this.state.openCurtains = true;
			// store.toggleAudio();
			this.curtainsOpen = true;
		},
		toggleBgmAutoPlay() {
			this.bgmStart = !this.bgmStart;
		}
	}
};
</script>

<style src="aos/dist/aos.css"></style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&display=swap");

main {
	width: 100%;
	/* max-width: 1140px; */
	margin: auto;
}

#app {
	background: white;
	background-image: url("~@/assets/polpattern2b2.png");
	background-repeat: repeat;
	font-family: "Poppins", sans-serif;
}

.preloader-volume-toggle {
	position: fixed;
	z-index: 9;
	left: 0;
	top: 0;
	float: right;
}
.preloader-left {
	position: fixed;
	z-index: 8;
	left: 0;
	height: 100%;
	width: 50%;
	background-image: url("/POLton/img/curtain_end.png");
	background-size: cover;
	background-position: bottom right;
	background-color: rgba(0,0,0,0.9);
}

.preloader-right {
	position: fixed;
	z-index: 998;
	right: 0;
	height: 100%;
	width: 50%;
	background-image: url("/POLton/img/curtain_end.png");
	background-size: cover;
	background-position: bottom right;
	transform: scaleX(-1);
	background-color: rgba(0,0,0,0.9);
}

.preloader-right.page-loaded, .preloader-left.page-loaded {
	background-color: initial;
}

.page-loaded {
	animation: curtain 1.5s ease-out;
	animation-fill-mode: forwards;
}

.hide-preloader-volume-toggle {
	visibility: hidden;
}

@keyframes curtain {
	0% {
		width: 50%;
	}
	100% {
		width: 0;
	}
}

/* scrollbar properties */
::-webkit-scrollbar {
	width: 8px;
}
::-webkit-scrollbar-track {
	background: #b88c8c;
}
::-webkit-scrollbar-thumb {
	background: #7c1a1f;
}
::-webkit-scrollbar-thumb:hover {
	background: #bb2830;
}
</style>
