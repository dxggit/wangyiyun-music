import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",

    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        children: [
          {
            path: "",
            name: "commen",
            component: () => import("@/views/recommen/recommendation.vue"),
          },
          {
            path: "music-list",
            name: "music-list",
            component: () => import("@/views/music-list/music-list.vue"),
          },
          {
            path: "/music-list/highquality",
            name: "highquality",
            component: () => import("@/views/music-list/highquality-music.vue"),
          },
          {
            path: "toplist",
            name: "toplist",
            component: () => import("@/views/toplist"),
          },
          {
            path: "singer",
            name: "singer",
            component: () => import("@/views/singer"),
          },
          {
            path: "new-music",
            name: "new-music",
            component: () => import("@/views/new-music"),
          },
        ],
      },
    ],
  },
];
const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
