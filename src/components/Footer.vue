<template>
	<div id="footer">
		<h2>Credits</h2>
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
		};
	},
	methods: {
		resolveI18n(obj) {
			return obj[this.$i18n.locale];
		},
	},
};
</script>

<style>
#footer {
	background: rgba(255, 255, 255, 0.65);
	border-top: #7c1a1f solid 0.25em;
	backdrop-filter: blur(6px);
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
	margin-bottom: 2rem;
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
</style>
