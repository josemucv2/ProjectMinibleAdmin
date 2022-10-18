import state from './clientsState.js'
import mutations from './clientsMutation.js'
import actions from './clientsAction.js'
import getters from './clientsGetter.js'

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
