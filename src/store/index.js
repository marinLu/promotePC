import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    homeTitle: ''
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
