import Vue from 'vue'
import Vuex from 'vuex'
import  * as getters from './getters'


Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    skillsList: [
      'html', 'css', 'javascript', 'vue', 'vuex', 'less', 'sass', 'jquery', 'bootstrap'
    ],

  },
  getters
})

export default store

