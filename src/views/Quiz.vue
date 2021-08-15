<template>
	<v-container>
		<Header :banner_image="banner"></Header>
		<section class="quiz-intro-body">
			<div class="quiz-languages">
				<v-btn class="quiz-lang-btn" :to="{ name: 'QuizJP' }">日本語</v-btn>
				<v-btn class="quiz-lang-btn" :to="{ name: 'QuizZH' }">繁體中文</v-btn>
				<v-btn class="quiz-lang-btn" :to="{ name: 'QuizEN' }">English</v-btn>
			</div>
		</section>
	</v-container>
</template>

<script>
import Header from "../components/Header";
import AOS from "aos";

export default {
	components: {
		Header,
	},
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
			banner: "img/quiz.png",
		};
	},
};
</script>

<style>
iframe {
	height: 100vh;
}

.quiz-intro-body {
	min-height: 50vh;
	margin-top: 2.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.quiz-lang-title {
	text-align: center;
	font-size: 2.25rem;
}

.quiz-languages {
	display: grid;
	/* display: flex; */
	justify-content: center;
	align-items: center;
	margin: 5rem 0;
}

.quiz-lang-btn {
	margin: 0 1rem;
	margin-top: 1.25rem;
	margin-bottom: 1.25rem;
}

.quiz-lang-btn { min-height: 64px; }
.quiz-lang-btn > * { font-size: 2em; height: 48px; }


</style>
