import Vue from 'vue'
import Vuex from 'vuex'
import states from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

import * as commonHeader from './modules/commonHeader'

Vue.use(Vuex)
export default new Vuex.Store({
  states,
  getters,
  mutations,
  actions,
  modules: {
    commonHeader
  }
})
