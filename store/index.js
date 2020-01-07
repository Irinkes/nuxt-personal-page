import Vue from 'vue'
import Vuex from 'vuex'
import  * as getters from './getters'
import  * as actions from './actions'
import  * as mutations from './mutations'


Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    skillsList: [
      'html', 'css', 'javascript', 'vue', 'vuex', 'less', 'sass', 'jquery', 'bootstrap'
    ],
    educationList: [],
  },
  actions,
  getters,
  mutations,
})

export default store

