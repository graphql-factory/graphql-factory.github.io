import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const strict = true

const SET_MOBILE = 'SET_MOBILE'
const SET_DIMENSIONS = 'SET_DIMENSIONS'
const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU'

const state = {
  isMobile: false,
  showMobileMenu: false,
  dimensions: {
    windowHeight: window.height,
    topNav: 0,
    bottomNav: 0
  }
}

const mutations = {
  [SET_MOBILE]: (state, isMobile) => {
    state.isMobile = isMobile
  },
  [SET_DIMENSIONS]: (state, dimensions) => {
    state.dimensions = dimensions
  },
  [TOGGLE_MOBILE_MENU]: (state, show) => {
    state.showMobileMenu = typeof show === 'boolean'
      ? show
      : !state.showMobileMenu
  }
}

const actions = {
  setMobile: ({ commit }, isMobile) => {
    commit(SET_MOBILE, isMobile)
  },
  setDimensions: ({ commit }, dimensions) => {
    commit(SET_DIMENSIONS, dimensions)
  },
  toggleMobileMenu: ({ commit }, show) => {
    commit(TOGGLE_MOBILE_MENU, show)
  }
}

const getters = {
  isMobile: state => state.isMobile,
  showMobileMenu: state => state.showMobileMenu,
  dimensions: state => state.dimensions
}

export default new Vuex.Store({
  strict,
  state,
  actions,
  getters,
  mutations
})
