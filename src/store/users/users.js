import state from './usersState.js'
import mutations from './usersMutation.js'
import actions from './usersAction.js'
import getters from './usersGetter.js'

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
