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
	<div>
		<div class="my-gallery" :class="album_class">
			<div v-for="(image, key) in images" v-bind:key="key">
				<div class="illust_thumbnail" data-aos="fade-up">
					<a :href="image.path" :artist="image.artist" :message="image.message">
						<img
							:src="image.thumbnail"
							alt=""
							:class="image_class"
							:srcset="image.thumbnail_srcset"
							:sizes="thumbnail_sizes"
						/>
					</a>
				</div>
				<div>
					<div class="illust_profile">
						<img class="profile-pic" :src="image.profile_pic" />
					</div>
					<div>
						<a
							v-if="image.artist_twitter_link"
							:href="image.artist_twitter_link"
						>
							<v-icon>mdi-twitter</v-icon>
							{{ image.artist_twitter }}
						</a>
						<span v-if="!image.artist_twitter_link">
							{{ image.artist_twitter }}
						</span>
					</div>
				</div>
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
				new SimpleLightbox(".my-gallery a", this.options);
			} else {
				new SimpleLightbox(".my-gallery a");
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
.my-gallery a img {
	margin: 1.4em;
	border: 0.3em solid white;
	background: white;
	-webkit-transition: -webkit-transform 0.15s ease;
	-moz-transition: -moz-transform 0.15s ease;
	-o-transition: -o-transform 0.15s ease;
	-ms-transition: -ms-transform 0.15s ease;
	transition: transform 0.15s ease;
	position: relative;
}
.my-gallery a:hover img {
	-webkit-transform: scale(1.05);
	-moz-transform: scale(1.05);
	-o-transform: scale(1.05);
	-ms-transform: scale(1.05);
	transform: scale(1.05);
	z-index: 5;
}
.my-gallery a.big img {
	width: 40%;
}

.align-center {
	text-align: center;
}

.sl-caption,
.sl-close,
.sl-counter,
.sl-current,
.sl-total {
	font-family: "Roboto", sans-serif;
}
</style>
