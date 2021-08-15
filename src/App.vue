<template>
	<v-app id="app">
		<div class="preloader preloader-left"
		></div>
		<div class="preloader preloader-right"
		></div>
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
		loaded: false
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
				this.openCurtains(event.target)
			})
		});
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
			if (e.classList.contains("preloader-left")) {
				var rightCurtain = document.getElementsByClassName("preloader-right")[0];
				rightCurtain.classList.toggle('page-loaded');
			} else { // we clicked right curtain
				var leftCurtain = document.getElementsByClassName("preloader-left")[0];
				leftCurtain.classList.toggle('page-loaded');
			}
			e.classList.toggle('page-loaded');
		}
	},
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

.preloader-left {
	position: fixed;
	z-index: 999;
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
	z-index: 999;
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
