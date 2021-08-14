<template>
    <div>
        <div id="credits">
            <div v-for="group in credits" :key="group.name"
                class="credit-group"
                :id="group.name"
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
        </div>
        <div id="disclaimer">
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
@media screen and (min-width: 300px) { #credits { column-count: 1; } }
@media screen and (min-width: 600px) { #credits { column-count: 2; } }
@media screen and (min-width: 960px) { #credits { column-count: 3; } }
@media screen and (min-width: 1280px) { #credits { column-count: 4; } }

#credits { 
    border-top: #bb2830 solid .25em; 
    color: #bb2830;
    padding-top: 1.25em;
}

.credit-group { 
    overflow: hidden; 
    margin-bottom: 1.25em;
}

.credit-group-name { font-size: 1.25em; }

#disclaimer { 
    color: black;
    margin-top: 1.3em;
    font-size: 1.4em 
}
</style>