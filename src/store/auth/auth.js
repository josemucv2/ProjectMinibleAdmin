import state from './authState.js'
import mutations from './authMutation.js'
import actions from './authAction.js'
import getters from './authGetter.js'

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
