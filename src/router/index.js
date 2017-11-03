import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Main from '@/components/Main'
import Learn from '@/components/Learn'
import LearnIntro from '@/components/learn/Intro'
import LearnSetup from '@/components/learn/Setup'
import LearnFactory from '@/components/learn/Factory'
import LearnDefs from '@/components/learn/Definitions'
import LearnTypeDefs from '@/components/learn/TypeDefinitions'
import LearnSchemaDefs from '@/components/learn/SchemaDefinitions'
import LearnFunctions from '@/components/learn/Functions'
import LearnContext from '@/components/learn/Context'
import LearnTypeLanguage from '@/components/learn/TypeLanguage'
import LearnMiddleware from '@/components/learn/Middleware'

import Docs from '@/components/Docs'
import Tutorials from '@/components/Tutorials'
import Plugins from '@/components/Plugins'
import Search from '@/components/Search'
import Credits from '@/components/Credits'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
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
        default: 'learn'
      },
      children: [
        {
          path: '/',
          name: 'learn',
          component: LearnIntro,
          meta: {
            title: 'Introduction'
          }
        },
        {
          path: 'setup',
          name: 'learn.setup',
          component: LearnSetup,
          meta: {
            title: 'Setup'
          }
        },
        {
          path: 'factory',
          name: 'learn.factory',
          component: LearnFactory,
          meta: {
            title: 'The Factory'
          }
        },
        {
          path: 'definitions',
          name: 'learn.definitions',
          component: LearnDefs,
          meta: {
            title: 'Definitions'
          }
        },
        {
          path: 'type-definitions',
          name: 'learn.typeDefinitions',
          component: LearnTypeDefs,
          meta: {
            title: 'Type Definitions'
          }
        },
        {
          path: 'schema-definitions',
          name: 'learn.schemaDefinitions',
          component: LearnSchemaDefs,
          meta: {
            title: 'Schema Definitions'
          }
        },
        {
          path: 'functions',
          name: 'learn.functions',
          component: LearnFunctions,
          meta: {
            title: 'Functions'
          }
        },
        {
          path: 'context',
          name: 'learn.context',
          component: LearnContext,
          meta: {
            title: 'Context'
          }
        },
        {
          path: 'type-language',
          name: 'learn.typeLanguage',
          component: LearnTypeLanguage,
          meta: {
            title: 'Type Language'
          }
        },
        {
          path: 'middleware',
          name: 'learn.middleware',
          component: LearnMiddleware,
          meta: {
            title: 'Middleware'
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
        exact: true
      }
    },
    {
      path: '/tutorials',
      name: 'tutorials',
      component: Tutorials,
      meta: {
        title: 'Tutorials',
        exact: true
      }
    },
    {
      path: '/plugins',
      name: 'plugins',
      component: Plugins,
      meta: {
        title: 'Plugins',
        exact: true
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
