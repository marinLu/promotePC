import Vue from 'vue'
import Vuex from 'vuex'
import url from './url.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    homeTitle: '',
    url:url
  },
  getters: {
    getHomeTitle (state) {
      return state.homeTitle
    }
  },
  mutations:{
    setHomeTitle (state,data) {
      state.homeTitle = data
    }
  },
  actions: {

  }
})
