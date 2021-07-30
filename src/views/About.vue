<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="ma-0 pa-0">
        <v-card class="ma-1 pa-4">
          <p class="headline font-weight-bold">
            <v-icon large color="red">mdi-party-popper</v-icon>
            {{$t("ui.info")}}
          </p>
          <!-- <p>{{$t("ui.betainfo")}}</p> -->
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="12" class="ma-0 pa-0">
        <v-card class="ma-1 pa-4">
          <p class="headline font-weight-bold">
            <v-icon large color="primary">mdi-help-circle</v-icon>
            {{$t("ui.helptitle")}}
          </p>
          <p>{{$t("ui.helpcontent")}}</p>
          <p>{{$t("ui.additionalhelp")}}</p>
        </v-card>
      </v-col>
    </v-row> -->
    <v-row>
      <v-col cols="12" class="ma-0 pa-0">
        <v-card class="ma-1 pa-4">
          <v-row align="end">
            {{$t("ui.developer")}}
            <!-- <v-btn icon @click="See('https://github.com/RomainLK/lulu-button')">
              <v-icon>mdi-github</v-icon>
            </v-btn> -->
          </v-row>
          <v-row align="end">{{$t("ui.fork")}}</v-row>
          <v-row>{{$t("ui.credits")}}</v-row>
          <v-row>{{$t("ui.design")}}</v-row>
          <v-row>{{$t("ui.art")}}</v-row>
          <v-row>{{$t("ui.sound")}}</v-row>
          <v-row>{{$t("ui.specialThanks")}}</v-row>
          <v-row>{{$t("ui.translationCredits")}}</v-row>
          <v-row>{{$t("ui.disclaimer")}}</v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>