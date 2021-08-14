<template>
	<v-container>
		<Header :banner_image="banner" :title_text="title_text"></Header>
		<!-- messages -->
		<div id="messages">
			<div
				v-for="message in messages"
				:key="message.name"
				class="message"
				data-aos="fade-up"
			>
				<div class="profile">
					<div class="name">
						<span>{{ message.name }}</span>
						<br />
						<span
							v-if="message.country_flag"
							:class="message.country_flag"
							style="right-align"
						></span>
					</div>
					<div class="pfp">
						<img
							v-if="message.profile_pic"
							class="profile-pic"
							:src="message.profile_pic"
						/>
					</div>
				</div>
				<hr class="divider" />
				<div class="message-text">
					<p>
						{{ message.message }}
					</p>
				</div>
				<hr v-if="message.message_jp" class="divider" />
				<div v-if="message.message_jp" class="message-text">
					<p>
						{{ message.message_jp }}
					</p>
				</div>
			</div>
		</div>
	</v-container>
</template>

<script>
import messages from "../assets/messages.json";
import Header from "../components/Header";
import AOS from "aos";

export default {
	components: {
		Header,
	},
	data() {
		return {
			banner: "img/otegami.png",
			title_text: "Messages",
			messages: messages.messages,
		};
	},
	methods: {
		AOSInit() {
			this.aos = AOS;
			this.aos.init({
				duration: 400,
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
.title-card {
	height: 5em;
	display: flex;
	align-items: center;
	justify-content: center;
}

.title-text {
	font-size: 1.25em;
	font-weight: 500;
	line-height: 2em;
}

@media screen and (min-width: 600px) {
	#messages {
		column-count: 1;
	}
}

@media screen and (min-width: 960px) {
	#messages {
		column-count: 2;
	}
}

@media screen and (min-width: 1280px) {
	#messages {
		column-count: 3;
	}
}

#messages {
	min-height: 15vh;
	column-gap: 1.25em;
}

.message {
	padding: 0.75em;
	border-radius: 1%;
	overflow: hidden;
	display: inline-block;
	width: 100%;
	background: repeating-linear-gradient(
		-45deg,
		#bb2830,
		#bb2830 10px,
		white 10px,
		white 20px
	);

	border: #1145a7 solid 0.25em;
}

.title-card {
	background: #bc627d;
	border: 0.3em solid #f2db7e;
	border-radius: 1%;
	color: #f2db7e;
}

.title-card,
.message {
	margin-bottom: 3em;
	box-shadow: 5px 8px 20px -5px rgba(10, 10, 10, 0.75);
}

.name,
.message-text {
	color: rgb(41, 0, 88);
}

.message-text {
	white-space: pre-line;
	padding: 1em;
}

.profile,
.message-text {
	background-color: rgba(255, 255, 255, 0.99);
}

.profile {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 5em;
	padding: 1em;
	border-radius: 1%;
}

.name {
	font-size: 1.1em;
}

.flag-icon {
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 3px 4px rgba(0, 0, 0, 0.2);
}

.divider {
	border: none;
}
.divider:after {
	height: 0.25em;
	display: block;
	content: " ";
	background: repeating-linear-gradient(
		to right,
		rgba(17, 69, 167, 1) 0,
		rgba(17, 69, 167, 1) 0.75em,
		rgba(255, 255, 255, 0) 0.75em,
		rgba(255, 255, 255, 0) 1.5em
	);
	margin: 1em -0.75em 1em -0.75em;
}

.pfp {
	margin-top: 0.4em;
}

.profile-pic {
	max-width: 64px;
	max-height: 64px;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 1);
}
</style>
