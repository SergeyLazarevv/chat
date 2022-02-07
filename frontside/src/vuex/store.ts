import Vue, { createApp } from 'vue'
import Vuex from "vuex"
import { createStore } from 'vuex'
import socket from "./modules/socket"
import template from "./modules/template"

const store = createStore({
    state: {
        test: 9080
    },
    modules: {
        template
    }
})

export default store;