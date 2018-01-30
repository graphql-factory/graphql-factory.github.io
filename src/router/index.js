import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Welcome from '@/components/welcome/Welcome'
import Learn from '@/components/learn/Learn'
import LearnTopic from '@/components/learn/LearnTopic'
import API from '@/components/api/API'
import APIDoc from '@/components/api/APIDoc'
import ApiClass from '@/components/api/ApiClass'

import Tutorials from '@/components/Tutorials'
import Plugins from '@/components/Plugins'
import Directives from '@/components/directives/Directives'
import Designer from '@/components/designer/Designer'
import Search from '@/components/search/Search'
import Credits from '@/components/Credits'

import { api, learn } from '../data'

import hub from '../hub'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
      meta: {
        title: 'Welcome!',
        exact: true,
        theme: 'blue'
      }
    },
    {
      path: '/learn',
      component: Learn,
      meta: {
        title: 'Learn',
        exact: false,
        default: 'learn',
        desktopMenu: true,
        theme: 'purple'
      },
      children: [
        {
          path: '/',
          name: 'learn',
          component: LearnTopic,
          meta: {
            title: 'Overview',
            config: learn.overview,
            section: true,
            theme: 'purple'
          }
        },
        {
          path: 'documenting',
          name: 'learn.documenting',
          component: LearnTopic,
          meta: {
            title: 'Documenting',
            config: learn.documenting,
            section: false,
            theme: 'purple'
          }
        },
        {
          path: 'getting_started',
          name: 'learn.gettingStarted',
          component: LearnTopic,
          meta: {
            title: 'Getting Started',
            config: learn.gettingStarted,
            section: false,
            theme: 'purple'
          }
        },
        {
          path: 'gfd_format',
          name: 'learn.gfdFormat',
          component: LearnTopic,
          meta: {
            title: 'GFD Format',
            config: learn.gfdFormat,
            section: false,
            theme: 'purple'
          }
        }
      ]
    },
    {
      path: '/api',
      component: API,
      meta: {
        title: 'API',
        exact: false,
        default: 'api',
        desktopMenu: true
      },
      children: [
        {
          path: '/',
          name: 'api',
          component: APIDoc,
          meta: {
            title: 'API',
            theme: 'carbon'
          }
        },
        {
          path: 'SchemaDefinition',
          name: 'api.schemadefinition',
          component: ApiClass,
          meta: {
            title: 'SchemaDefinition',
            theme: 'carbon',
            config: api.schemaDefinition
          }
        },
        {
          path: 'SchemaBacking',
          name: 'api.schemabacking',
          component: ApiClass,
          meta: {
            title: 'SchemaBacking',
            theme: 'carbon',
            config: api.schemaDefinition
          }
        }
      ]
    },
    {
      path: '/tutorials',
      name: 'tutorials',
      component: Tutorials,
      meta: {
        title: 'Tutorials',
        exact: true,
        desktopMenu: true,
        theme: 'yellow'
      }
    },
    {
      path: '/plugins',
      name: 'plugins',
      component: Plugins,
      meta: {
        title: 'Plugins',
        exact: true,
        desktopMenu: true,
        theme: 'orange'
      }
    },
    {
      path: '/directives',
      name: 'directives',
      component: Directives,
      meta: {
        title: 'Directives',
        exact: true,
        desktopMenu: true,
        theme: 'aqua'
      }
    },
    {
      path: '/designer',
      name: 'designer',
      component: Designer,
      meta: {
        title: 'Designer',
        exact: true,
        desktopMenu: true,
        theme: 'red'
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        title: 'Search',
        exact: true
      }
    },
    {
      path: '/credits',
      name: 'credits',
      component: Credits,
      meta: {
        title: 'Credits',
        exact: true
      }
    }
  ]
})

// scroll to top on page load
router.beforeEach(function (to, from, next) {
  // close the menu on new route if mobile
  if (store.state.isMobile) {
    store.dispatch('toggleMobileMenu', false)
  }
  next()
})

router.afterEach(function () {
  setTimeout(() => {
    const route = router.app.$route
    hub.$emit('route.change')

    if (route.hash) {
      const id = route.hash.replace(/^#/, '')
      const el = document.getElementById(`${id}-anchor`)
      if (el) el.scrollIntoView(true)
    } else {
      document.getElementById('content').scrollTo(0, 0)
    }
  })
})

export default router
