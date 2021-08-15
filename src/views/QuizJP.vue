<template>
	<v-container>
		<div data-aos="zoom-in" data-aos-delay="1500">
			<v-btn href="https://twitter.com/intent/tweet?text=%E3%82%B5%E3%83%BC%E3%82%AB%E3%82%B9%E3%81%AE%E9%80%9F%E5%BA%A6%E3%81%AB%E4%BB%98%E3%81%84%E3%81%A6%E8%A1%8C%E3%81%91%E3%81%A6%E3%82%8B%E3%81%A7%E3%81%97%E3%82%87%E3%81%86%E3%81%8B%EF%BC%9F%E3%81%93%E3%81%AE%20%23%E5%B0%BE%E4%B8%B8%E3%83%9D%E3%83%AB%E3%82%AB%E4%B8%80%E5%91%A8%E5%B9%B4%E3%82%AF%E3%82%A4%E3%82%BA%20%E3%81%A7%E3%83%9D%E3%83%AB%E3%82%AB%E7%9F%A5%E8%AD%98%E3%82%92%E7%A2%BA%E8%AA%8D%EF%BC%81https%3A%2F%2Fnepolabo.fans%2Fpolka%2Fquiz" target="_blank">
				<v-icon>
					mdi-twitter
				</v-icon>
			</v-btn>
			<iframe
				:src="
					'https://docs.google.com/forms/d/e/1FAIpQLSeT6QRsCYLZUhHSpvUn_GqigBP1xap59TnjBQ-PwxxpuwK3oQ/viewform?usp=pp_url&entry.1421225021=' +
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
