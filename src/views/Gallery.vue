<template>
	<v-container>
		<Header :banner_image="banner" :title_text="title_text"></Header>
		<!-- gallery Lightbox -->
		<div class=".gallery-container">
			<lightbox
				id="art_gallery"
				:images="art_pieces"
				:image_class="'art'"
				:album_class="'art-album'"
				:options="options"
			>
			</lightbox>
		</div>
	</v-container>
</template>

<script>
import art_pieces from "../assets/art_pieces.json";
import Header from "../components/Header";

import AOS from "aos";
import Lightbox from "../components/Lightbox";

import "flag-icon-css/css/flag-icon.css";

export default {
	components: {
		Header,
		Lightbox,
	},
	data() {
		return {
			banner: "img/irasuto.png",
			title_text: "Gallery",
			art_pieces: art_pieces.art_pieces,
			options: {
				closeText: "X",
				captionPosition: "bottom",
				swipeClose: false,
				docClose: false,
			},
		};
	},
	methods: {
		AOSInit() {
			this.aos = AOS;
			this.aos.init({
				duration: 1000,
				disable: "mobile",
			});
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.AOSInit();
		});
	},
};
</script>

<style>
.art-album {
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
}
</style>
