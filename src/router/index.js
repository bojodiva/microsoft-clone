import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import PasswordPage from "../pages/PasswordPage.vue";


const routes = [
    {
        path: "/",
        component: LandingPage,
        children: [
            {
                path: "password",
                name: "password",
                component: passwordPage
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;