<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="ma-0 pa-0">
        <v-card class="ma-1 pa-4">
          <p class="headline font-weight-bold">
            <v-icon large color="red">mdi-party-popper</v-icon>
            {{$t("ui.info")}}
          </p>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="ma-0 pa-0">
        <v-card class="ma-1 pa-4">
          <v-row align="end">
            {{$t("ui.developer")}}
          </v-row>
          <v-row align="end">{{$t("ui.fork")}}</v-row>
          <v-row>{{$t("ui.credits")}}</v-row>
          <v-row>{{$t("ui.design")}}</v-row>
          <v-row>{{$t("ui.art")}}</v-row>
          <v-row>{{$t("ui.sound")}}</v-row>
          <v-row>{{$t("ui.specialThanks")}}</v-row>
          <!-- <v-row>{{$t("ui.translationCredits")}}</v-row> -->
          <br>
          <v-row>{{$t("ui.disclaimer")}}</v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>