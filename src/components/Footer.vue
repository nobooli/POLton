<template>
    <div id="credits">
        <div v-for="group in credits" :key="group.name"
            class="credit-group"
        >
            <div class="credit-group-name">
                <span>{{ resolveI18n(group.translation) }}</span>
            </div>
            <div v-for="(member, i) in group.members" :key="i"
                class="credit-group-member"
            >
                <span>{{ member.name }}</span>
            </div>
        </div>
        <div>
            <span>{{ $t('ui.disclaimer') }}</span>
        </div>
    </div>
</template>

<script>
import credits from "../assets/credits.json"

export default {
    data: function() {
        return {
            credits: credits.credits
        }
    },
    methods: {
        resolveI18n(obj) {
            return obj[this.$i18n.locale];
        }
    }   
}
</script>

<style>

</style>