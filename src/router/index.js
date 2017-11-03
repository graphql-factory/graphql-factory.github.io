import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Welcome from '@/components/welcome/Welcome'
import Learn from '@/components/learn/Learn'
import LearnTopic from '@/components/learn/LearnTopic'

import Docs from '@/components/Docs'
import Tutorials from '@/components/Tutorials'
import Plugins from '@/components/Plugins'
import Search from '@/components/Search'
import Credits from '@/components/Credits'

import { learn } from '../data'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
      meta: {
        title: 'Welcome!',
        exact: true
      }
    },
    {
      path: '/learn',
      component: Learn,
      meta: {
        title: 'Learn',
        exact: false,
        default: 'learn',
        desktopMenu: true
      },
      children: [
        {
          path: '/',
          name: 'learn',
          component: LearnTopic,
          meta: {
            title: 'Introduction',
            config: learn.intro
          }
        },
        {
          path: 'setup',
          name: 'learn.setup',
          component: LearnTopic,
          meta: {
            title: 'Setup',
            config: learn.setup
          }
        },
        {
          path: 'factory',
          name: 'learn.factory',
          component: LearnTopic,
          meta: {
            title: 'The Factory',
            config: learn.factory
          }
        },
        {
          path: 'definitions',
          name: 'learn.definitions',
          component: LearnTopic,
          meta: {
            title: 'Definitions',
            config: learn.definitions
          }
        },
        {
          path: 'type-definitions',
          name: 'learn.typeDefinitions',
          component: LearnTopic,
          meta: {
            title: 'Type Definitions',
            config: learn.typeDefinitions
          }
        },
        {
          path: 'schema-definitions',
          name: 'learn.schemaDefinitions',
          component: LearnTopic,
          meta: {
            title: 'Schema Definitions',
            config: learn.schemaDefinitions
          }
        },
        {
          path: 'functions',
          name: 'learn.functions',
          component: LearnTopic,
          meta: {
            title: 'Functions',
            config: learn.functions
          }
        },
        {
          path: 'context',
          name: 'learn.context',
          component: LearnTopic,
          meta: {
            title: 'Context',
            config: learn.context
          }
        },
        {
          path: 'type-language',
          name: 'learn.typeLanguage',
          component: LearnTopic,
          meta: {
            title: 'Type Language',
            config: learn.typeLanguage
          }
        },
        {
          path: 'middleware',
          name: 'learn.middleware',
          component: LearnTopic,
          meta: {
            title: 'Middleware',
            config: learn.middleware
          }
        }
      ]
    },
    {
      path: '/docs',
      name: 'docs',
      component: Docs,
      meta: {
        title: 'Docs',
        exact: true,
        desktopMenu: true
      }
    },
    {
      path: '/tutorials',
      name: 'tutorials',
      component: Tutorials,
      meta: {
        title: 'Tutorials',
        exact: true,
        desktopMenu: true
      }
    },
    {
      path: '/plugins',
      name: 'plugins',
      component: Plugins,
      meta: {
        title: 'Plugins',
        exact: true,
        desktopMenu: true
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
    document.getElementById('main').scrollTo(0, 0)
  })
})

export default router
