import Vue from "vue"
import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/main",
        name: "main",
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
            label: "Регистрация",
            //layout: "login"
        },
        component: () => import("./view/Registration.vue")
    },
    {
        path: "/users",
        name: "users",
        meta: {
            title: "Пользователи",
            label: "Пользователи",
            //layout: "login"
        },
        component: () => import("./view/Users.vue")
    },
    {
        path: "/messages",
        name: "messages",
        meta: {
            title: "Сообщения",
            label: "Сообщения",
            //layout: "login"
        },
        component: () => import("./view/Messages.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;