<template>
	<v-container>
		<div data-aos="zoom-in" data-aos-delay="1500">
			<v-btn href="https://twitter.com/intent/tweet?text=%E4%BD%A0%E8%83%BD%E8%B7%9F%E5%BE%97%E4%B8%8A%E9%A6%AC%E6%88%B2%E5%9C%98%E7%9A%84%E9%80%9F%E5%BA%A6%E5%97%8E%EF%BC%9F%E4%BE%86%20%23PolQuiz%20%E6%B8%AC%E8%A9%A6%E4%BD%A0%E7%9A%84%E5%BA%A7%E9%95%B7%E7%9F%A5%E8%AD%98%E5%90%A7%20:%0Ahttps%3A%2F%2Fnepolabo.fans%2Fpolka%2Fquiz" target="_blank">
				<v-icon>
					mdi-twitter
				</v-icon>
			</v-btn>
			<iframe
				:src="
					'https://docs.google.com/forms/d/e/1FAIpQLSdlQBXOUHs85egImCgkCq44ZUnFHEW5FAizrOVDxQus7xW-rQ/viewform?usp=pp_url&entry.378588067=' +
						uuid +
						'&embedded=true'
				"
				width="100%"
				height="100%"
				frameborder="0"
				class="quizframe"
			>
			</iframe>
		</div>
	</v-container>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
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
			// Slightly expensive to bind to all images, adjust the filter as needed
			const images = document.querySelectorAll('img')
			images.forEach((elem) => {
				elem.addEventListener('load', () => {
					this.aos.refresh();
				});
			});
		}
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
			uuid: uuidv4()
		};
	},
};
</script>

<style>
iframe {
	height: 100vh;
}
</style>
