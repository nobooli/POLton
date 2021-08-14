<template>
	<v-container>
		<Header :banner_image="banner"></Header>
		<!-- messages -->
		<div id="messages">
			<div
				v-for="message in messageLines"
				:key="message.name"
				class="message"
				data-aos="fade-up"
			>
				<div class="message-body">
					<div class="profile">
						<div class="name">
							<span
								v-if="message.country_flag"
								:class="message.country_flag"
								style="right-align"
							></span>
							<p>{{ message.name }}</p>
						</div>
						<img
							v-if="message.profile_pic"
							class="profile-pic"
							:src="message.profile_pic"
						/>
					</div>
					<div class="divider"></div>
					<div class="message-text">
						<p v-for="(line, i) in message.message" v-bind:key="i">
							{{ line }}
						</p>
					</div>
					<div v-if="message.message_jp" class="divider"></div>
					<div v-if="message.message_jp" class="message-text">
						<p>
							{{ message.message_jp }}
						</p>
					</div>
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
	computed: {
		messageLines() {
			let newMessages = [...this.messages];
			newMessages.map((msg) => {
				if (!Array.isArray(msg.message)) {
					msg.message = msg.message.split(/\r\n|\r|\n/g);
				}
				return msg.message;
			});
			return newMessages;
		},
	},
};
</script>

<style>
#messages {
	column-gap: 2em;
	column-width: 30ch;
}

.message {
	padding: 0.75em;
	border-radius: 0.5rem;
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
	margin-bottom: 2em;
	box-shadow: 5px 8px 20px -5px rgba(10, 10, 10, 0.75);
	border: #1145a7 solid 0.25em;
}

.message-body {
	background: white;
	padding: 1rem;
}

.profile .name p {
	margin: 0;
	font-weight: 600;
	color: #290058;
}

.profile .name .flag-icon {
	margin-right: 0.4rem;
}

.name,
.message-text {
	color: #422168;
}

.message-text {
	margin-bottom: 1rem;
}

.message .message-text p {
	line-height: 1.4;
	margin-bottom: 0.4em;
}

.profile {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.5rem;
}

.name {
	font-size: 1.1em;
	display: flex;
	justify-content: center;
	align-items: center;
}

.flag-icon {
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 3px 4px rgba(0, 0, 0, 0.2);
	height: min-content;
}

.divider {
	width: 100%;
	margin: 0 auto 1rem auto;
	height: 2px;
	background: repeating-linear-gradient(
		to right,
		#4580ed 0,
		#4580ed 0.75em,
		#ffffff 0.75em,
		#ffffff 1.5em
	);
}

.profile-pic {
	max-width: 64px;
	max-height: 64px;
	border-radius: 50%;
}
</style>
