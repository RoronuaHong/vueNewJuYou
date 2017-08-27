import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

import * as commonHeader from './modules/commonHeader'
import * as loginPage from './modules/loginPage'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: [
    commonHeader,
    loginPage
  ]
});
