import Vue from "vue";
import VueRouter from "vue-router";
import MainUI from "@/views/Main";
import Soundboard from "@/views/Soundboard";
import Messages from "@/views/Messages";
//import BingoGenerator from "@/views/BingoGenerator";
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
    path: "/Messages",
    component: Messages,
    meta: {
      title: "Messages",
    },
  },
  {
    path: "/Soundboard",
    component: Soundboard,
    meta: {
      title: "Soundboard"
    }
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
