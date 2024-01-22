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
                path: "resources",
                children: [
                    {
                        path: "packages",
                        name: "Packages",
                        component: () => import("@/views/Packages.vue"),
                    },
                    {
                        path: "tutorials",
                        name: "Tutorials",
                        component: () => import("@/views/Tutorials.vue"),
                    },
                    {
                        path: "roadmap",
                        name: "Roadmap",
                        component: () => import("@/views/Roadmap.vue"),
                    },
                ],
            },
            {
                path: "association",
                name: "Association",
                component: () => import("@/views/Association.vue"),
            },
            {
                path: "contribute",
                children: [
                    {
                        path: "",
                        name: "Contribute",
                        component: () => import("@/views/Contribute.vue"),
                    },
                    {
                        path: "donate",
                        name: "Donate",
                        component: () => import("@/views/Donate.vue"),
                    },
                ],
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
