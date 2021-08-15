<template>
	<v-app id="app">
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
	}),
	mounted() {
		let timeNow = new Date();
		let hours = timeNow.getHours();
		if (hours < 6 || hours > 18) {
			this.$store.commit("change_dark_mode");
			this.$vuetify.theme.dark = this.$store.state.dark_mode;
		}
		window.onbeforeinstallprompt = (e) => {
			this.prompt = true;
			this.deferred = e;
		};
		window.addEventListener("scroll", this.handleScroll, true);
		if (this.$cookies.isKey("Lang")) {
			this.$i18n.locale = this.$cookies.get("Lang");
		}
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
	},
};
</script>

<style src="aos/dist/aos.css"></style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&display=swap");

main {
	width: 100%;
	max-width: 1140px;
	margin: auto;
}

#app {
	background: white;
	background-image: url("~@/assets/polpattern2b2.png");
	background-repeat: repeat;
	font-family: "Poppins", sans-serif;
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
