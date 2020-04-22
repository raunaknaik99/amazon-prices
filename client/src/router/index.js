import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/index';

Vue.use(VueRouter);

const routes = [{
                path: '/login',
                name: 'Login',
                component: () => import('../views/Login.vue'),
                beforeEnter(to, from, next) {
                        store.dispatch("auto_login");
                        if (store.getters.isAuthenticated) {
                                next('/profile');
                        } else {
                                next();
                        }
                }
        },
        {
                path: '/register',
                name: 'Register',
                component: () => import('../views/Register.vue'),
                beforeEnter(to, from, next) {
                        store.dispatch("auto_login");
                        if (store.getters.isAuthenticated) {
                                next('/profile');
                        } else {
                                next();
                        }
                }
        },
        {
                path: '/about',
                name: 'About',
                component: () => import('../views/About.vue')
        },
        {
                path: '/',
                beforeEnter(to, from, next) {
                        store.dispatch("auto_login");
                        if (store.getters.isAuthenticated) {
                                next('/profile');
                        } else {
                                next('/login');
                        }
                }
        },
        {
                path: "/profile",
                name: "Profile",
                component: () => import('../views/Profile.vue'),
                beforeEnter(to, from, next) {
                        store.dispatch("auto_login");
                        if (store.getters.isAuthenticated) {
                                next();
                        } else {
                                next('/login');
                        }
                }
        }
]

const router = new VueRouter({
        mode: "history",
        base: process.env.BASE_URL,
        routes
});

export default router;