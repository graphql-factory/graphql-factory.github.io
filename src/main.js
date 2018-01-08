// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import hub from './hub'
import 'prismjs/themes/prism.css'
import './css/style.css'

Vue.config.productionTip = false

// add the hub as a plugin
Vue.prototype.$hub = hub
Vue.prototype.$getPosition = el => {
  var xPos = 0
  var yPos = 0

  while (el) {
    if (el.tagName === 'BODY') {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft
      var yScroll = el.scrollTop || document.documentElement.scrollTop

      xPos += (el.offsetLeft - xScroll + el.clientLeft)
      yPos += (el.offsetTop - yScroll + el.clientTop)
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft)
      yPos += (el.offsetTop - el.scrollTop + el.clientTop)
    }

    el = el.offsetParent
  }
  return {
    x: xPos,
    y: yPos
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
