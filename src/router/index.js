// Composables
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "gettingstarted",
        name: "GettingStarted",
        component: () => import("@/views/GettingStarted.vue"),
      },
      {
        path: "learn",
        children: [
          {
            path: "documentation",
            name: "Documentation",
            component: () => import("@/views/Documentation.vue"),
          },
          {
            path: "tutorials",
            name: "Tutorials",
            component: () => import("@/views/Tutorials.vue"),
          },
        ],
      },
      {
        path: "association",
        children: [
          {
            path: "",
            name: "Association",
            component: () => import("@/views/Association.vue"),
          },
          // {
          //   path: "join",
          //   name: "Join",
          //   component: () => import("@/views/Join.vue"),
          // },
        ],
      },
      {
        path: "contribute",
        children: [
          {
            path: "",
            name: "Contribute",
            component: () => import("@/views/Contribute.vue"),
          },
        ],
      },
      {
        path: "donate",
        name: "Donate",
        component: () => import("@/views/Donate.vue"),
      },
    ],
  },
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
    // otherwise always scroll to top
    return { top: 0 };
  },
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
