import Vue from "vue";
import VueRouter from "vue-router";
import MainUI from "@/views/Main";
import BingoGenerator from "@/views/BingoGenerator";
import About from "@/views/About";

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
  {
    path: "/about",
    component: About,
    meta: {
      title: "About ~ Konlulu",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
