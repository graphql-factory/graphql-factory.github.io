import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { extendMutation } from 'vue-deepset'

Vue.use(Vuex)

const strict = true

const SET_MOBILE = 'SET_MOBILE'
const SET_DIMENSIONS = 'SET_DIMENSIONS'
const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU'
const TOGGLE_LEFT_MENU = 'TOGGLE_LEFT_MENU'

const state = {
  algolia: {
    apiKey: '80d8cb65cf8d4338b3c8e85fe04d48a3',
    appId: '4LE3OOJNJZ',
    indexName: 'graphqlfactory'
  },
  isMobile: false,
  showMobileMenu: false,
  dimensions: {
    windowHeight: window.height,
    topNav: 0,
    bottomNav: 0
  },
  persistent: {
    showLeftMenu: false
  },
  apiMenuState: {},
  menuState: {}
}

const mutations = extendMutation({
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
  },
  [TOGGLE_LEFT_MENU]: (state, show) => {
    state.persistent.showLeftMenu = typeof show === 'boolean'
      ? show
      : !state.persistent.showLeftMenu
  }
})

const actions = {
  setMobile: ({ commit }, isMobile) => {
    commit(SET_MOBILE, isMobile)
  },
  setDimensions: ({ commit }, dimensions) => {
    commit(SET_DIMENSIONS, dimensions)
  },
  toggleMobileMenu: ({ commit }, show) => {
    commit(TOGGLE_MOBILE_MENU, show)
  },
  toggleLeftMenu: ({ commit }, show) => {
    commit(TOGGLE_LEFT_MENU, show)
  }
}

const getters = {
  isMobile: state => state.isMobile,
  showMobileMenu: state => state.showMobileMenu,
  dimensions: state => state.dimensions,
  showLeftMenu: state => state.persistent.showLeftMenu,
  algolia: state => state.algolia,
  apiMenuState: state => state.apiMenuState
}

export default new Vuex.Store({
  strict,
  state,
  actions,
  getters,
  mutations,
  plugins: [
    createPersistedState({
      key: 'graphqlfactory.io',
      paths: ['persistent']
    })
  ]
})
