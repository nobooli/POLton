<template>
	<div id="footer">
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
					<span>{{ member.name }}</span>
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
	border-top: #bb2830 solid 0.25em;
	backdrop-filter: blur(6px);
}

#credits {
	color: #bb2830;
	padding: 3rem 2rem;
	max-width: 1440px;
	margin: auto;
	column-width: 17.5em;
}

.credit-group {
	overflow: hidden;
	margin-bottom: 1.25em;
}

.credit-group-name {
	font-size: 1.25em;
}

#disclaimer {
	color: #242424;
	font-size: 1.25em;
	font-style: italic;
	text-align: center;
	margin-bottom: 2rem;
}
</style>
