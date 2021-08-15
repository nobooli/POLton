<template>
	<div>
		<Header :banner_image="banner"></Header>
		<!-- gallery Lightbox -->
		<lightbox
			id="art_gallery"
			:images="art_pieces"
			:image_class="'art'"
			:album_class="'art-album'"
			:options="options"
		>
		</lightbox>
	</div>
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
				duration: 500,
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
	display: grid;
	grid-gap: 2.5rem 1rem;
	grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));
	margin: 0 1rem;
	place-items: center;
}
</style>
