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
		<div data-aos="zoom-in" data-aos-delay="1500">
			<iframe
				:src="'https://docs.google.com/forms/d/e/1FAIpQLSdlQBXOUHs85egImCgkCq44ZUnFHEW5FAizrOVDxQus7xW-rQ/viewform?usp=pp_url&entry.378588067=' + uuid + '&embedded=true'"
				width="100%"
				height="100%"
				frameborder="0"
			>
			</iframe>
			<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" 
				class="twitter-share-button" 
				data-size="large" 
				:data-text="this.results" 
				data-hashtags="polquiz" 
				data-url="nepolabo.fans" 
				data-show-count="false">Tweet</a>
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
