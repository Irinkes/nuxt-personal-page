import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    skillsList: [
      'html', 'css', 'javascript', 'vue', 'vuex', 'less', 'sass', 'jquery', 'bootstrap'
    ],

  },
  getters: {
    getSkill: state => state.skillsList,

  },
})

export default store

