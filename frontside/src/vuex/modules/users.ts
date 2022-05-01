import { GetterTree, MutationTree, ActionTree } from "vuex"
import { User } from "../../types/vuex"

interface State {
    users: User[]
}

export default {
    actions: <ActionTree<State, any>> {
        setOnline ({commit}: any, newOnlineUser: User): void {
            commit('setOnline', newOnlineUser);
        },
        setOffline ({commit}: any, logOutUser: User): void {
            commit('setOffline', logOutUser);
        },
        setUsers({commit}: any, users: User[]): void {
            commit('setUsers', users)
        }
    },
    mutations: <MutationTree<State>> {
        setOnline: function (state: State, newOnlineUser: User): void {
            state.users.map(user => {
                if(user.email == newOnlineUser['email']) {
                    user.online = true
                }
            })
        },
        setOffline(state: State, logOutUser: User): void {
            state.users.map(user => {
                if(user.email == logOutUser['email']) {
                    user.online = false
                }
            })
        },
        setUsers(state: State, users: User[]): void {
            state.users = users
        }
    },
    state: <State> {
        users: [],
    },
    getters: <GetterTree<State, any>> {

        getUsers(state: State) {
            return state.users
        },

        getOnline(state: State): number {
            return state.users.filter(user => user.online).length
        }
    },
}