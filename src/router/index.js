import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main";
import Soundboard from "@/views/Soundboard";
import Presents from "@/views/Gallery";
import About from "@/views/About";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    meta: {
      title: "Pol",
    },
  },
  {
    path: "/Soundboard",
    name: "Soundboard",
    component: Soundboard,
    meta: {
      title: "Soundboard"
    }
  },  
  {
    path: "/Presents",
    name: "Presents",
    component: Presents,
    meta: {
      title: "Presents"
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "About"
    },
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  base: "/POLton/"
});

export default router;
