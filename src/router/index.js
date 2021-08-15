import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main";
import Presents from "@/views/Gallery";
import Messages from "@/views/Messages";

Vue.use(VueRouter);

function lazyLoad(view) {
  return() => import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    meta: {
      title: "Pol"
    },
  },
  {
    path: "/Soundboard",
    name: "Soundboard",
    component: lazyLoad('Soundboard'),
    meta: {
      title: "Soundboard"
    }
  },  
  { // can't lazy load yet because Gallery refers to CSS defined in Messages
    path: "/Presents",
    name: "Presents",
    component: Presents, 
    meta: {
      title: "Presents"
    },
  },
  { // can't lazy load yet because Gallery refers to CSS defined in Messages
    path: "/Messages",
    name: "Messages",
    component: Messages,
    meta: {
      title: "Messages"
    }
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: lazyLoad('Quiz'),
    meta: {
      title: "Quiz"
    },
  },
  {
    path: "/quiz/jp",
    name: "QuizJP",
    component: lazyLoad('QuizJP'),
    meta: {
      title: "Quiz"
    },
  },  {
    path: "/quiz/zh",
    name: "QuizZH",
    component: lazyLoad('QuizZH'),
    meta: {
      title: "Quiz"
    },
  },  {
    path: "/quiz/en",
    name: "QuizEN",
    component: lazyLoad('QuizEN'),
    meta: {
      title: "Quiz"
    },
  }//,
  // {
  //   path: "/about",
  //   name: "About",
  //   component: lazyLoad('About'),
  //   meta: {
  //     title: "About"
  //   },
  // }
];

const router = new VueRouter({
  mode: "history",
  routes,
  base: "/POLton/",
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
