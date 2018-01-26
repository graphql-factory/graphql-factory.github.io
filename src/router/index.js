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
            title: 'Introduction',
            config: learn.intro,
            section: true,
            theme: 'purple'
          }
        },
        {
          path: 'setup',
          name: 'learn.setup',
          component: LearnTopic,
          meta: {
            title: 'Setup',
            config: learn.setup,
            theme: 'purple'
          }
        },
        {
          path: 'definitions',
          name: 'learn.definitions',
          component: LearnTopic,
          meta: {
            title: 'Definitions',
            config: learn.definitions,
            section: true,
            theme: 'purple'
          }
        },
        {
          path: 'type-definitions',
          name: 'learn.typeDefinitions',
          component: LearnTopic,
          meta: {
            title: 'Type Definitions',
            config: learn.typeDefinitions,
            theme: 'purple'
          }
        },
        {
          path: 'schema-definitions',
          name: 'learn.schemaDefinitions',
          component: LearnTopic,
          meta: {
            title: 'Schema Definitions',
            config: learn.schemaDefinitions,
            theme: 'purple'
          }
        },
        {
          path: 'functions',
          name: 'learn.functions',
          component: LearnTopic,
          meta: {
            title: 'Functions',
            config: learn.functions,
            theme: 'purple'
          }
        },
        {
          path: 'context',
          name: 'learn.context',
          component: LearnTopic,
          meta: {
            title: 'Context',
            config: learn.context,
            theme: 'purple'
          }
        },
        {
          path: 'type-language',
          name: 'learn.typeLanguage',
          component: LearnTopic,
          meta: {
            title: 'Type Language',
            config: learn.typeLanguage,
            theme: 'purple'
          }
        },
        {
          path: 'middleware',
          name: 'learn.middleware',
          component: LearnTopic,
          meta: {
            title: 'Middleware',
            config: learn.middleware,
            section: true,
            theme: 'purple'
          }
        },
        {
          path: 'libraries',
          name: 'learn.libraries',
          component: LearnTopic,
          meta: {
            title: 'Libraries',
            config: learn.libraries,
            section: true,
            theme: 'purple'
          }
        },
        {
          path: 'build-library',
          name: 'learn.buildLibrary',
          component: LearnTopic,
          meta: {
            title: 'Building a Library',
            config: learn.buildLibrary,
            theme: 'purple'
          }
        },
        {
          path: 'registry',
          name: 'learn.registry',
          component: LearnTopic,
          meta: {
            title: 'Registry',
            config: learn.registry,
            theme: 'purple'
          }
        },
        {
          path: 'making-requests',
          name: 'learn.makingRequests',
          component: LearnTopic,
          meta: {
            title: 'MakingRequests',
            config: learn.makingRequests,
            theme: 'purple'
          }
        },
        {
          path: 'plugins',
          name: 'learn.plugins',
          component: LearnTopic,
          meta: {
            title: 'Plugins',
            config: learn.plugins,
            section: true,
            theme: 'purple'
          }
        },
        {
          path: 'authoring-plugins',
          name: 'learn.authoringPlugins',
          component: LearnTopic,
          meta: {
            title: 'Authoring Plugins',
            config: learn.authoringPlugins,
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
