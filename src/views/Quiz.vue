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
		<section class="quiz-intro-body">
			<h2 class="quiz-lang-title">Select a language</h2>
			<div class="quiz-languages">
				<v-btn class="quiz-lang-btn" :to="{ name: 'QuizJP' }">日本語</v-btn>
				<v-btn class="quiz-lang-btn" :to="{ name: 'QuizZH' }">繁體中文</v-btn>
				<v-btn class="quiz-lang-btn" :to="{ name: 'QuizEN' }">English</v-btn>
			</div>
		</section>
	</v-container>
</template>

<script>
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
		return {};
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
	animation: letterStretch 1s ease infinite alternate;
}

.quiz-languages {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 5rem 0;
}

.quiz-lang-btn {
	margin: 0 1rem;
}

@keyframes letterStretch {
	0% {
		transform: scale(0.95, 1.15);
	}
	100% {
		transform: scale(1.15, 1);
	}
}
</style>
