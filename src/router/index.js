import Vue from "vue";
import VueRouter from "vue-router";
import MainUI from "@/views/Main";
import BingoGenerator from "@/views/BingoGenerator";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainUI,
    meta: {
      title: "Soundboard ~ Konlulu",
    },
  },
  {
    path: "/bingo-generator",
    component: BingoGenerator,
    meta: {
      title: "Bingo Generator ~ Konlulu",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
