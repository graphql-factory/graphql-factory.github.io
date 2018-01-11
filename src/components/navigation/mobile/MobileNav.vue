<template lang="pug">
  div(style="overflow: hidden;")
    #top-nav(ref="topNav", :class="`theme-${$route.meta.theme}`", style="padding-top: 5px;padding-bottom: 5px;")
      nav.navbar.navbar-expand-lg
        .container-fluid
          ul.nav.navbar-nav
            li.nav-item(@click="showMenu = !showMenu")
              svg.toggler(width='24px', height='24px', viewBox='0 0 48 30')
                path(d='M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z')
          ul.nav.navbar-nav.mx-auto
            li.nav-item
              span(style='line-height: 100%;font-weight: 600;') {{$route.meta.title}}
          ul.nav.navbar-nav
            li.nav-item
              img.logo.whiteout(src="../../../assets/graphql-factory.svg")
    #content(ref="content", :style="contentStyle")
      div(ref="inner")
        router-view
    #overlay-menu(:style="overlayStyle")
      .menu-content
        .main-links
          router-link.noselect.grayscale(:to="{ name: 'welcome' }", active-class="no-greyscale", exact)
            img(src="../../../assets/graphql-factory.svg", style="width: 30px; margin-right: 10px;")
            span Home
          router-link.noselect.grayscale(:to="{ name: 'api' }", active-class="no-greyscale")
            img(src="../../../assets/icons/api.svg")
            span API
          router-link.noselect.grayscale(to="/learn", active-class="no-greyscale")
            img(src="../../../assets/icons/learning.svg")
            span Learn
          router-link.noselect.grayscale(to="/tutorials", active-class="no-greyscale")
            img(src="../../../assets/icons/tutorials.svg")
            span Tutorials
          router-link.noselect.grayscale(to="/directives", active-class="no-greyscale")
            img(src="../../../assets/icons/directive.svg")
            span Directives
          router-link.noselect.grayscale(to="/plugins", active-class="no-greyscale")
            img(src="../../../assets/icons/plugins.svg")
            span Plugins
          router-link.noselect.grayscale(to="/designer", active-class="no-greyscale")
            img(src="../../../assets/icons/design.svg")
            span Designer
        welcome-links(v-if="rightNavContent === 'welcome'")
        learn-menu(v-if="rightNavContent === 'learn'")
        api-menu(v-if="rightNavContent === 'api'")
</template>

<script type="text/babel">
import { mapGetters } from 'vuex'
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
    ...mapGetters([
      'dimensions'
    ]),
    rightNavContent () {
      return this.$route.name.split('.')[0]
    },
    contentStyle () {
      return {
        left: this.showMenu ? `${this.dimensions.windowWidth * 0.7}px` : '0px',
        height: `${this.dimensions.windowHeight - 57}px`
      }
    },
    overlayStyle () {
      return {
        height: `${this.dimensions.windowHeight}px`
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
  transition: .5s ease;
}

#content {
  position: fixed;
  top: 57px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  width: 100%;
  overflow-y: scroll; /* has to be scroll, not auto */
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  z-index: 1;
  background-color: #fafafa;
  padding-top: 10px;
  padding-bottom: 30px;
  transition: .3s ease;
}

#overlay-menu {
  background-color: #e5e5e5;
  z-index: 0;
  position: fixed;
  top: 0px;
  left: 0px;
  padding-top: 56px;
  width: 100%;
  height: 100%;
  overflow-y: scroll; /* has to be scroll, not auto */
  -webkit-overflow-scrolling: touch;
}

.main-links {
  padding-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(192, 192, 192);
  background-color: rgb(240, 240, 240);
}

#overlay-menu a {
  display: block;
  margin-bottom: 10px;
  margin-left: 7px;
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
  margin-bottom: 15px;
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
