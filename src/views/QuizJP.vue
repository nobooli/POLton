<template>
	<v-container>
		<div data-aos="zoom-in" data-aos-delay="1500">
			<v-btn @click="getScoreTweet()">
				<v-icon>
					mdi-twitter
				</v-icon>
			</v-btn>
			<span>{{ this.score }}</span>
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
		},
		getScoreTweet() {
			fetch(
				"https://script.google.com/macros/s/AKfycbyeam0tNYJ7lu2egW2AgD9PsZbV-_ABpmmnyyIAf9AZDyk6VqID6Z-6jkItZlerH19h/exec?id=" +
					this.uuid
			)
				.then((response) => {
					response.json()
				})
				.then((json) => {
					var receivedScore = json[0];

					var audio = new Audio("/voices/Lines/POLglish/Oh_Yeah.mp3");
					audio.play();

					var score = receivedScore <= 0 ? "" : "" + receivedScore + " / 100%0A";
					this.url = "https://twitter.com/intent/tweet?text=" + score + "%23polquiz %0Ahttps%3A%2F%2Fnepolabo.fans%2Fpolka%2Fquiz";
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
			score: ""
		};
	},
};
</script>

<style>
iframe {
	height: 100vh;
}
</style>
