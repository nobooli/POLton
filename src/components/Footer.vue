<template>
	<div id="footer">
		<h2>{{ $t("ui.credits") }}</h2>
		<div id="credits">
			<div
				v-for="group in credits"
				:key="group.name"
				class="credit-group"
				:id="group.name"
			>
				<div class="credit-group-name">
					<span>{{ resolveI18n(group.translation) }}</span>
				</div>
				<div
					v-for="(member, i) in group.members"
					:key="i"
					class="credit-group-member"
				>
					<span>
						{{ member.name }}
						<a v-if="member.twitter" :href="member.twitter.url">
							{{ member.twitter.tag }}
						</a>
					</span>
				</div>
			</div>
			<div>
				<v-hover class="navi-zain">
					<a href="">
						<img id="bouquet_zain" 
							@click="scrolltotop"
							:src="hovered_zain ? ball_hover : ball_idle"
							@mouseover="hovered_zain = true"
							@mouseleave="hovered_zain = false"
							:srcset="hovered_zain ? ball_srcset_hover : ball_srcset"
							:sizes="zain_sizes"
							class="jumping-zain"
						/>
					</a>
				</v-hover>
			</div>
		</div>
		<div id="disclaimer">
			<span>{{ $t("ui.disclaimer") }}</span>
		</div>
	</div>
</template>

<script>
import credits from "../assets/credits.json";

export default {
	data: function() {
		return {
			credits: credits.credits,
			hovered_zain: false,
			zain_sizes: "300px",
			ball_idle: "img/bouquetzain2_300.png",
			ball_hover: "img/bouquetzain2_300.png",
			ball_srcset:
				"img/bouquetzain2_300.png 300w",
			ball_srcset_hover:
				"img/bouquetzain2_300.png 300w",
		};
	},
	methods: {
		resolveI18n(obj) {
			return obj[this.$i18n.locale];
		},
		scrolltotop() {
			window.scrollTo({top: 0, behavior: 'smooth'});
		}
	},
};
</script>

<style>
#footer {
	background: rgba(255, 255, 255, 0.65);
	border-top: #7c1a1f solid 0.25em;
	backdrop-filter: blur(6px);
	margin-top: 2.5rem;
	color: #bb2830;
	padding: 3rem 2rem;
}

#footer h2 {
	font-size: 2.5em;
	font-weight: 900;
	text-align: center;
	margin-bottom: 3rem;
}

#credits {
	max-width: 1440px;
	margin: auto;
	column-width: clamp(12em, 20vw, 20em);
	margin-bottom: 3rem;
}

.credit-group {
	overflow: hidden;
	margin-bottom: 1.5em;
}

.credit-group-name {
	color: #7c1a1f;
	font-size: 1.25em;
	margin-bottom: 0.2em;
	font-weight: 600;
}

#disclaimer {
	color: #242424;
	font-size: 1.25em;
	font-style: italic;
	text-align: center;
}

#bouquet_zain {
	margin-left: -65px;
}

@media screen and (max-width: 600px) {
	#bouquet_zain { 
		width: 100%; 
		margin-left: 35px;
	}
}
</style>
