import Vue from "vue"
import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/main",
        name: "adminPage",
        meta: {
            title: "Администрирование",
            label: "Администрирование"
    },
        component: () => import("./view/Main.vue")
    },
    {
        path: "/login",
        name: "login",
        meta: {
            title: "Форма входа",
            label: "Логин",
            //ayout: "login"
        },
        component: () => import("./view/Login.vue")
    },
    {
        path: "/registration",
        name: "registration",
        meta: {
            title: "Форма регистрации",
            label: "Логин",
            //layout: "login"
        },
        component: () => import("./view/Registration.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;