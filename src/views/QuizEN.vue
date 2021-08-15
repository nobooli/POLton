<template>
	<v-container>
		<div data-aos="zoom-in" data-aos-delay="1500">
			<v-btn>
				<v-icon>
					mdi-twitter
				</v-icon>
			</v-btn>
			<iframe
				:src="
					'https://docs.google.com/forms/d/e/1FAIpQLScYsLUoD5RMPGxY_m9kB-jD4A8vF_J0JQWg-q___toNYaPf5g/viewform?usp=pp_url&entry.231184758=' +
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
