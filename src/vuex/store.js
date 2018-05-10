import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './mutation-types'
Vue.use(Vuex)

const state = {
  id: 'idtest'
}
const actions = {}
const getters = {}
const mutations = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
