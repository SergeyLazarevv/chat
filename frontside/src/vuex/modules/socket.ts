import Vuex from "vuex"

export default new Vuex.Store({

    state: {
        users: []
    },

    // getters: {
    //     getUser (state) {
    //         return state.users
    //     }
    // },

    mutations: {

        SOCKET_START() {
            console.log('socker start')
        },

        SOCKET_CLOSE() {
            console.log('close')
        }
    },
    actions: {
        
    }
})
