import Vue from "vue"
import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router";
import login from "./templates/Login.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/profile",
        name: "profile",
        meta: {
            title: "Профиль",
            label: "Профиль",
            layout: "profile"
        },
        component: () => import("./view/Profile.vue")
    },
    {
        path: "/users",
        name: "users",
        meta: {
            title: "Пользователи",
            label: "Пользователи"
        },
        component: () => import("./view/Users.vue")
    },
    {
        path: "/messages",
        name: "messages",
        meta: {
            title: "Сообщения",
            label: "Сообщения"
        },
        component: () => import("./view/Messages.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;