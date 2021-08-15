// MIT License // Copyright (c) 2017 Vaibhavraj Roham // Permission is hereby
granted, free of charge, to any person obtaining a copy // of this software and
associated documentation files (the "Software"), to deal // in the Software
without restriction, including without limitation the rights // to use, copy,
modify, merge, publish, distribute, sublicense, and/or sell // copies of the
Software, and to permit persons to whom the Software is // furnished to do so,
subject to the following conditions: // The above copyright notice and this
permission notice shall be included in all // copies or substantial portions of
the Software. // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
EVENT SHALL THE // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
OR OTHER // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE // SOFTWARE.

<template>
	<div :class="album_class">
		<div class="illust_card" v-for="(image, key) in images" v-bind:key="key">
			<div class="illust_thumbnail" data-aos="fade-up">
				<a :href="image.path" :artist="image.artist" :message="image.message">
					<img
						:src="image.thumbnail"
						:alt="image.artist_twitter"
						:class="image_class"
						:srcset="image.thumbnail_srcset"
						:sizes="thumbnail_sizes"
					/>
				</a>
			</div>
			<div class="illust_profile" data-aos="fade-up" data-aos-duration="650">
				<a v-if="image.artist_twitter_link" :href="image.artist_twitter_link">
					<v-icon>mdi-twitter</v-icon>
					<p>{{ image.artist_twitter }}</p>
				</a>
				<span v-if="!image.artist_twitter_link">
					<p>{{ image.artist_twitter }}</p>
				</span>
				<img class="profile-pic" :src="image.profile_pic" />
			</div>
		</div>
	</div>
</template>

<script>
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.css";

export default {
	props: {
		id: {
			type: String,
			required: true,
		},
		images: {
			type: Array,
			required: true,
		},
		image_class: {
			type: String,
		},
		album_class: {
			type: String,
		},
		options: {
			type: Object,
			required: false,
		},
	},
	mounted() {
		try {
			if (this.options != undefined) {
				new SimpleLightbox(".illust_thumbnail a", this.options);
			} else {
				new SimpleLightbox(".illust_thumbnail a");
			}
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log("something");
		}
	},
	data() {
		return {
			thumbnail_sizes: "(max-width: 600px) 150px, 300px",
		};
	},
};
</script>

<style>
.illust_card {
	max-width: 300px;
	width: 100%;
	filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.4));
}

.illust_thumbnail img {
	width: 100%;
	height: 100%;
	background: white;
	border-radius: 0.5rem;
	border: #f8ed9e solid 0.3rem;
	display: block;
	margin-bottom: 0.2rem;
	transition: transform 200ms ease-out, border 300ms ease-out;
}

.illust_thumbnail:hover img {
	border: #bb2830 solid 0.3rem;
	transform: translateY(-0.5rem);
}

.illust_profile {
	display: flex;
	justify-content: space-between;
	align-content: center;
	padding: 0.5rem;
	background: #e6e6e6;
	border-radius: 0.5rem;
}

.illust_profile a,
.illust_profile span {
	align-items: center;
	display: flex;
	justify-content: center;
	text-decoration: none;
}

.illust_profile .mdi-twitter {
	color: #4ab4f4;
}

.illust_profile:hover .mdi-twitter {
	animation: twitter 250ms ease;
	animation-fill-mode: forwards;
}

@keyframes twitter {
	0% {
		transform: rotate(0deg);
	}
	33% {
		transform: rotate(-15deg);
	}
	67% {
		transform: rotate(15deg);
	}
	100% {
		transform: rotate(0deg);
	}
}

.illust_profile p {
	margin: 0 0 0 0.3rem !important;
}

.align-center {
	text-align: center;
}
</style>
