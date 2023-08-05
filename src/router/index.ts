import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import defaultLayout from "/src/layouts/default/index.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: defaultLayout,
    redirect: "/a",
    children: [
      {
        path: "a",
        name: "a",
        component: () => import("/src/views/a/index.vue"),
      },

      {
        path: "b",
        name: "b",
        component: () => import("/src/views/b/index.vue"),
        meta: {
          cache: true,
        },
      },

      {
        path: "c",
        name: "c",
        component: () => import("/src/views/c/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
