// Composables
import { createRouter, createWebHistory } from "vue-router";

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
                path: "start",
                name: "Start",
                component: () => import("@/views/Start.vue"),
            },
            {
                path: "documentation",
                children: [
                    {
                        path: "packages",
                        name: "Packages",
                        component: () => import("@/views/Packages.vue"),
                    },
                    {
                        path: "workflows",
                        name: "Workflows",
                        component: () => import("@/views/Workflows.vue"),
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
                name: "Contribute",
                component: () => import("@/views/Contribute.vue"),
            },
        ],
    },
];

const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition);
        // always scroll to top
        return { top: 0 };
    },
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
