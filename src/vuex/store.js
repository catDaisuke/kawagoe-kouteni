import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './mutation-types'
Vue.use(Vuex)

const state = {
  id: null
}
const actions = {}
const getters = {}
const mutations = {
  [types.ADD_USERID] (state, payload) {
    state.id = payload.id
  },
  [types.REMOVE_USERID] (state) {
    state.id = null
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
