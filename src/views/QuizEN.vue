<template>
	<v-container>
		<div data-aos="zoom-in" data-aos-delay="1500">
			<v-btn 
				href="https://twitter.com/intent/tweet?text=Have%20you%20been%20able%20to%20keep%20up%20with%20the%20circus?%20Check%20your%20Polka%20knowledge%20in%20the%20%23%E5%B0%BE%E4%B8%B8%E3%83%9D%E3%83%AB%E3%82%AB%E4%B8%80%E5%91%A8%E5%B9%B4%E3%82%AF%E3%82%A4%E3%82%BA%20%20here:%0Ahttps%3A%2F%2Fnepolabo.fans%2Fpolka%2Fquiz" 
				target="_blank" >
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
