import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
                path: '/users/login',
                name: 'Login',
                component: () => import('../views/Login.vue')
        },
        {
                path: '/users/register',
                name: 'Register',
                component: () => import('../views/Register.vue')
        },
        {
                path: '/about',
                name: 'About',
                component: () => import('../views/About.vue')
        }
]

const router = new VueRouter({
        mode: "history",
        base: process.env.BASE_URL,
        routes
});

export default router;