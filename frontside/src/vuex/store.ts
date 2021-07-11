import Vue, { createApp } from 'vue'
import Vuex from "vuex"
import { createStore } from 'vuex'
//import brand from "./modules/brand"
import socket from "./modules/socket"

const store = createStore({
    modules: {
        socket
   //     section
    }
})

export default store;