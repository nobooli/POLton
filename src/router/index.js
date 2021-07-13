import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main";
import Soundboard from "@/views/Soundboard";
import Presents from "@/views/Submissions";
//import BingoGenerator from "@/views/BingoGenerator";
import About from "@/views/About";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main,
    meta: {
      title: "Pol",
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
    path: "/Presents",
    component: Presents,
    meta: {
      title: "Presents"
    },
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "About"
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
