<template>
	<div class="main-title-card">
		<img class="banner-img" :src="banner_image" />
	</div>
</template>

<script>
export default {
	props: {
		banner_image: {
			type: String,
			required: true,
		},
	},
	data: function() {
		return {};
	},
};
</script>

<style>
.banner-img {
	width: 100%;
	max-height: 70vh;
	object-fit: contain;
	object-position: center top;
}
</style>
