import { GetterTree, MutationTree, ActionTree } from "vuex"

export interface User {
    id: number,
    clearStorage?: boolean
    department?: string
    dept?: string
    mail?: string
    position?: string
    role: Array<Role['name']>
    sector?: string
    username?: string
}

export interface Role {
    name: string,
    id: number,
    description: string
}

interface State {
    user: User
}

export default {
    actions: <ActionTree<State, any>> {
        addUser ({commit}: any, user: User): void {
            commit('ADD_USER', user);
        }
    },
    mutations: <MutationTree<State>> {
        ADD_USER: function (state: any, user: User): void {
            state.user = user;
        }
    },
    state: <State> {
        user: {},
    },
    getters: <GetterTree<State, any>> {
        getUser(state: State): User
        {
            console.log('user GETTER', state.user)
            return state.user
        },
		getAdminStatus(state: State): boolean {
			return state.user.role ? state.user.role.includes('ROLE_ADMIN') : false
		}
    },
}