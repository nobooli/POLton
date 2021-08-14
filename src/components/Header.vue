<template>
	<div class="main-title-card">
		<div class="ticket_card">
			<h3 class="title_text" style="margin-bottom:0px;">
				<span>{{ this.title_text }}</span>
				<!-- <span>{{ $t("link.soundboard") }}</span> -->
			</h3>
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
.ticket_card {
	/* this will be the border + shape */
	position: relative;
	background: white;
	border: 2em solid #bb2830;
	border-radius: 0.3rem;
	padding: 0.5rem 0;
	box-shadow: 0 1px 2px #f8ee9e23, 0 2px 4px #f8ee9e23, 0 4px 8px #f8ee9e23,
		0 8px 16px #f8ee9e23, 0 16px 32px #f8ee9e23, 0 32px 64px #f8ee9e23;
}

/* dot pattern on the border */
.ticket_card:after {
	content: "";
	position: absolute;
	top: -1.25em;
	left: -1.25em;
	right: -1.25em;
	bottom: -1.25em;
	border: 1em dotted white;
	border-image-source: url("/img/border_dot.svg");
	border-image-slice: 33% 33%;
	border-image-repeat: round;
	filter: drop-shadow(0 0 4px white);
}

.title_text {
	margin: auto;
	white-space: nowrap;
	overflow: hidden;
	/* position: absolute; */
	width: 100%;
	color: #1e1e1e;
	font-weight: 500;
	font-size: 3em;
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
	max-height: 70vh;
	object-fit: contain;
	object-position: center top;
}
</style>
