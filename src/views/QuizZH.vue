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
					'https://docs.google.com/forms/d/e/1FAIpQLSdlQBXOUHs85egImCgkCq44ZUnFHEW5FAizrOVDxQus7xW-rQ/viewform?usp=pp_url&entry.378588067=' +
						uuid +
						'&embedded=true'
				"
				width="100%"
				height="100%"
				frameborder="0"
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
		},
		getScoreTweet() {
			fetch(
				"https://script.google.com/macros/s/AKfycbyljtN8fUV1oySysXGp_HyI6oF0ermZ9XyAmq_7Q8luA1Ye5ijj34x8w4_kAYMA8gYe/exec" +
					this.uuid
			)
				.then((response) => response.json())
				.then((receivedScore) => {
					var score =
						receivedScore <= 0
							? "" + receivedScore + " / 100%0A"
							: (window.location.href =
									"https://twitter.com/intent/tweet?text=" +
									score +
									"%23polquiz %0Ahttps%3A%2F%2Fnepolabo.fans%2Fpolka%2Fquiz");
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
