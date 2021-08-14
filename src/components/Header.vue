<template>
	<div class="main-title-card">
		<div class="ticket_card">
			<div>
				<p class="title_text" style="margi-bottom:0px;">
					<span>{{ this.title_text }}</span>
					<!-- <span>{{ $t("link.soundboard") }}</span> -->
				</p>
			</div>
		</div>
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
		title_text: {
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
.main-title-card {
	/* fills the space minus header */
	height: calc(100vh - 56px);
}

.ticket_card {
	/* this will be the border + shape */
	position: relative;
	background: #46403f;
	border: 0.6em double #f8ed9e;
	border-radius: 0.3em;
	/* padding: 3em 0 3em 0; */
}

.title_text {
	margin: 0 auto;
	white-space: nowrap;
	overflow: hidden;
	/* position: absolute; */
	width: 100%;
}

.title_text {
	color: #f8ed9e;
	font-weight: 500;
	font-size: 2em;
}

.title_text span {
	display: inline-block;
	padding-left: 100%;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	animation-name: title_text;
}

@media screen and (max-width: 599px) {
	.title_text span {
		animation-duration: 12s;
	}
}

@media screen and (min-width: 600px) {
	.title_text span {
		animation-duration: 14s;
	}
}

@media screen and (min-width: 960px) {
	.title_text span {
		animation-duration: 16s;
	}
}

@media screen and (min-width: 1280px) {
	.title_text span {
		animation-duration: 20s;
	}
}

@media screen and (min-width: 1920px) {
	.title_text span {
		animation-duration: 24s;
	}
}

@keyframes title_text {
	100% {
		transform: translateX(-100%);
	}
}

.banner-img {
	width: 100%;
	height: 100%;
	object-fit: contain;
	object-position: top;
}
</style>
