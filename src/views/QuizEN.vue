<template>
	<v-container>
		<div data-aos="zoom-in" data-aos-delay="1500">
			<v-btn @click="getScoreTweet()">
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
		},
		getScoreTweet() {
			fetch(
				"https://script.google.com/macros/s/AKfycbxDSRdI5SAbqe0913KofKTchhv55_NBMEb5Pebgcic-btylAYfq1WifO1Mcs_lUyCyk4A/exec?id=" +
					this.uuid
			)
				.then((response) => {
					response.json()
				})
				.then((json) => {
					var receivedScore = json[0];

					var score =
						receivedScore <= 0 ? "" : "" + receivedScore + " / 100%0A";
					window.open("https://twitter.com/intent/tweet?text=" + score + "%23polquiz %0Ahttps%3A%2F%2Fnepolabo.fans%2Fpolka%2Fquiz"
)
					// var x = this.browser.windows.create({
					// 	url: "https://twitter.com/intent/tweet?text=" + score + "%23polquiz %0Ahttps%3A%2F%2Fnepolabo.fans%2Fpolka%2Fquiz"
					// });
					// window.location.href =
					// 	"https://twitter.com/intent/tweet?text=" +
					// 	score +
					// 	"%23polquiz %0Ahttps%3A%2F%2Fnepolabo.fans%2Fpolka%2Fquiz";
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
			uuid: uuidv4(),
			url: "",
		};
	},
};
</script>

<style>
iframe {
	height: 100vh;
}
</style>
