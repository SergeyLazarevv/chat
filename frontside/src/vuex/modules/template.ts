import { GetterTree, MutationTree, ActionTree } from "vuex"
interface State {
    template: string
}

export default {
    actions: <ActionTree<State, any>> {
        chgTemplate ({commit}: any, template: string): void {
            commit('chgTemplateMutation', template);
        }
    },
    mutations: <MutationTree<State>> {
        chgTemplateMutation: function (state: any, template: string): void {
            state.template = template;
        }
    },
    state: <State> {
        template: "main",
    },
    getters: <GetterTree<State, any>> {
        getTemplate(state: State): string
        {
            return state.template
        }
    },
}