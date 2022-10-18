import state from './operatorsState.js'
import mutations from './operatorsMutation.js'
import actions from './operatorsAction.js'
import getters from './operatorsGetter.js'

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
