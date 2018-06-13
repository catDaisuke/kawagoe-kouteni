import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './mutation-types'
Vue.use(Vuex)

const state = {
  user: {
    id: null,
    password: null
  },
  memberInfo: {
    id: null
  }
}
const actions = {}
const getters = {}
const mutations = {
  [types.ADD_USERID] (state, payload) {
    state.user.id = payload.id
  },
  [types.REMOVE_USERID] (state) {
    state.user.id = null
    state.user.password = null
  },
  [types.ADD_PASSWORD] (state, payload) {
    state.user.password = payload.password
  },
  [types.ADD_MEMBERID] (state, payload) {
    state.memberInfo.id = payload.id
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
