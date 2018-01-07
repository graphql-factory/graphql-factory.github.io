<template lang="pug">
  div
    #top-nav(ref="topNav", class="theme-white")
      nav.navbar.navbar-expand-lg
        .container-fluid
          ul.nav.navbar-nav
            li.nav-item(@click="showMenu = !showMenu")
              svg.toggler(width='24px', height='24px', viewBox='0 0 48 30')
                path(d='M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z')
          ul.nav.navbar-nav.mx-auto
            li.nav-item
              span(style='line-height: 100%;') {{$route.meta.title}}
          ul.nav.navbar-nav
            li.nav-item
              img.logo(src="../../../assets/graphql-factory.svg")
    #content(:style="contentStyle")
      router-view
    #overlay-menu
      ul
        router-link.noselect.grayscale(:to="{ name: 'welcome' }", tag="li", active-class="no-greyscale", exact)
          img(src="../../../assets/graphql-factory.svg", style="width: 30px; margin-right: 10px;")
          span Home
        router-link.noselect.grayscale(:to="{ name: 'api' }", tag="li", active-class="no-greyscale")
          img(src="../../../assets/icons/api.svg")
          span API
        router-link.noselect.grayscale(to="/learn", tag="li", active-class="no-greyscale")
          img(src="../../../assets/icons/learning.svg")
          span Learn
        router-link.noselect.grayscale(to="/tutorials", tag="li", active-class="no-greyscale")
          img(src="../../../assets/icons/tutorials.svg")
          span Tutorials
        router-link.noselect.grayscale(to="/directives", tag="li", active-class="no-greyscale")
          img(src="../../../assets/icons/directive.svg")
          span Directives
        router-link.noselect.grayscale(to="/plugins", tag="li", active-class="no-greyscale")
          img(src="../../../assets/icons/plugins.svg")
          span Plugins
        router-link.noselect.grayscale(to="/designer", tag="li", active-class="no-greyscale")
          img(src="../../../assets/icons/design.svg")
          span Designer
      hr
      welcome-links(v-if="rightNavContent === 'welcome'")
      learn-menu(v-if="rightNavContent === 'learn'")
      api-menu(v-if="rightNavContent === 'api'")
</template>

<script type="text/babel">
import LearnMenu from '@/components/learn/LearnMenu'
import ApiMenu from '@/components/api/APIMenu'
import WelcomeLinks from '@/components/welcome/WelcomeLinks'
export default {
  components: {
    LearnMenu,
    ApiMenu,
    WelcomeLinks
  },
  created () {
    this.$hub.$on('route.change', () => {
      this.showMenu = false
    })
  },
  computed: {
    rightNavContent () {
      return this.$route.name.split('.')[0]
    },
    contentStyle () {
      return {
        left: this.showMenu ? '90%' : '0px'
      }
    }
  },
  data () {
    return {
      showMenu: false
    }
  }
}
</script>

<style scoped>
#top-nav {
  z-index: 2;
  border-bottom: 1px solid #e5e5e5;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
}

#content {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 1;
  background-color: #fafafa;
  padding-top: 60px;
  transition: .3s ease;
}

#overlay-menu {
  overflow: auto;
  background-color: #e5e5e5;
  z-index: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  padding-top: 60px;
}

#overlay-menu img {
  width: 28px;
  height: auto;
  margin-left: 5px;
  margin-right: 12px;
  cursor: pointer;
}

#overlay-menu ul {
  list-style: none;
  padding-left: 0px;
}
#overlay-menu li {
  margin-bottom: 12px;
  color: #444;
}

.no-greyscale {
  -webkit-filter: none !important; /* Safari 6.0 - 9.0 */
  filter: none !important;
}

img.logo {
  height: 30px;
}
</style>
