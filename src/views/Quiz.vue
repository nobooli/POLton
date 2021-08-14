<template>
	<v-container>
		<div class="main-title-card">
			<div class="ticket_card">
				<div>
					<p class="title_text" style="margin-bottom:0px;">
						<span>{{ $t("link.quiz") }}</span>
					</p>
				</div>
			</div>
		</div>
		<br />
		<div>
			<v-btn :to="{ name: 'QuizJP' }">日本語</v-btn>
			<v-btn :to="{ name: 'QuizZH' }">繁體中文</v-btn>
			<v-btn :to="{ name: 'QuizEN' }">English</v-btn>
		</div>
	</v-container>
</template>

<script>
import AOS from "aos";

export default {
	setup() {},
	methods: {
		AOSInit() {
			this.aos = AOS;
			this.aos.init({
				duration: 1500,
				disable: "mobile",
			});
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.AOSInit();
		});
		let tweetButton = document.createElement("script");
		tweetButton.setAttribute("src", "https://platform.twitter.com/widgets.js");
		tweetButton.setAttribute("async", "");
		tweetButton.setAttribute("charset", "utf-8");
		document.head.appendChild(tweetButton);
	},
	data() {
		return {

		};
	},
};
</script>

<style>
iframe {
	height: 100vh;
}
</style>
