import Vue from "vue";
// import VueRouter from "vue-router";
import VueRouter from "@/my-vue-router/index.js";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    children: [
      {
        path: "a",
        name: "AboutA",
        component: () => import("../views/AboutA.vue"),
      },
      {
        path: "b",
        name: "AboutB",
        component: () => import("../views/AboutB.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: "/",
  routes,
});

export default router;
