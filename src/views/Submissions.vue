<template>
    <v-container>
        <v-row>
            <!-- gallery carousel -->
            <v-carousel cycle hide-delimiter-background height="400">
                <v-carousel-item 
                    v-for="(artpiece, i) in art" 
                    :key="i"
                    :src="artpiece.src">
                </v-carousel-item>
            </v-carousel>
        </v-row>
        <v-row>
            <!-- messages -->
        </v-row>
    </v-container>
</template>

<script>
import filler_buddha from "../assets/img/gallery/filler-sausage-buddha-pol-A4.png"
import filler_sausage from "../assets/img/gallery/filler-sausage-pol-A4.png"
import filler_swimsuit from "../assets/img/gallery/filler-swimsuit-zain-A5.png"
import filler_gutter from "../assets/img/gallery/filler-zain-gutter-A5.png"

export default {
    data() {
        return {
            art: [
                { src: filler_buddha },
                { src: filler_sausage },
                { src: filler_swimsuit },
                { src: filler_gutter }
            ]
        }
    }
}
</script>

<style scoped>

</style>