import Vue, { createApp } from 'vue'
import Vuex from "vuex"
import { createStore } from 'vuex'
import socket from "./modules/socket"
import template from "./modules/template"
import users from "./modules/users"

const store = createStore({
    state: {
        test: 9080
    },
    modules: {
        template,
        users
    }
})

export default store;