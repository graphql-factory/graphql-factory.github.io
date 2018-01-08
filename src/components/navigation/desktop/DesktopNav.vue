<template lang="pug">
  .full-viewport
    #top-nav(ref="topNav", :class="`theme-${theme}`")
      nav.navbar
        a.navbar-brand(@click="toggleLeftMenu")
          svg.toggler(width='24px', height='24px', viewBox='0 0 48 30')
            path(d='M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z')
          span.nav-text &nbsp;&nbsp;&nbsp;GraphQL Factory
          span.nav-delimiter |
          span.nav-text {{$route.meta.title}}
        div
          img.whiteout(src="../../../assets/graphql-factory.svg", style="width: 30px; margin-right: 10px;")
    #left-nav(ref="leftNav", :style="leftNavStyle")
      ul
        router-link.noselect.grayscale(:to="{ name: 'welcome' }", tag="li", active-class="no-greyscale", exact)
          img(src="../../../assets/graphql-factory.svg", style="width: 30px; margin-right: 10px;")
          span Home
        router-link.noselect.grayscale(:to="{ name: 'api' }", tag="li", active-class="no-greyscale", exact)
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
    #right-nav.custom-scroll(ref="rightNav", :style="rightNavStyle")
      welcome-links(v-if="rightNavContent === 'welcome'")
      learn-menu(v-if="rightNavContent === 'learn'")
      api-menu(v-if="rightNavContent === 'api'")
    #content.custom-scroll(ref="content", :style="contentStyle")
      .container-fluid
        router-view
</template>

<script type="text/babel">
import { mapGetters, mapActions } from 'vuex'
import LearnMenu from '@/components/learn/LearnMenu'
import ApiMenu from '@/components/api/APIMenu'
import WelcomeLinks from '@/components/welcome/WelcomeLinks'

const MIN_NAV_WIDTH = 47
const MAX_LEFT_NAV_WIDTH = 140

export default {
  mounted () {
    this.updateRightNavWidth()
    this.$hub.$on('route.change', () => {
      this.updateRightNavWidth()
    })
  },
  components: {
    LearnMenu,
    ApiMenu,
    WelcomeLinks
  },
  computed: {
    ...mapGetters([
      'dimensions',
      'showLeftMenu'
    ]),
    rightNavContent () {
      return this.$route.name.split('.')[0]
    },
    theme () {
      return this.$route.meta.theme || 'blue'
    },
    leftNavStyle () {
      const { windowHeight, topNavHeight } = this.dimensions
      return {
        top: `${topNavHeight}px`,
        bottom: '0px',
        height: `${windowHeight - topNavHeight}px`
      }
    },
    rightNavStyle () {
      const { windowHeight, topNavHeight } = this.dimensions
      return {
        top: `${topNavHeight}px`,
        bottom: '0px',
        height: `${windowHeight - topNavHeight}px`
      }
    },
    contentStyle () {
      const {
        windowWidth,
        windowHeight,
        topNavHeight
        } = this.dimensions
      const leftNavWidth = this.showLeftMenu
        ? MAX_LEFT_NAV_WIDTH
        : MIN_NAV_WIDTH

      return {
        top: `${topNavHeight}px`,
        left: `${leftNavWidth}px`,
        right: `${this.rightNavWidth}px`,
        bottom: '0px',
        height: `${windowHeight - topNavHeight}px`,
        width: `${windowWidth - leftNavWidth - this.rightNavWidth}px`
      }
    }
  },
  methods: {
    ...mapActions([
      'toggleLeftMenu'
    ]),
    updateRightNavWidth () {
      if (!this.$refs.rightNav) return
      const width = this.$refs.rightNav.offsetWidth
      this.rightNavWidth = width > MIN_NAV_WIDTH
        ? width
        : MIN_NAV_WIDTH
    }
  },
  data () {
    return {
      rightNavWidth: MIN_NAV_WIDTH
    }
  }
}
</script>

<style scoped>
#top-nav {
  z-index: 2;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-width: 100%;
  transition: .5s ease;
}

#top-nav span.nav-text {
  font-weight: 400;
}

#top-nav span.nav-delimiter {
  font-weight: 100;
  padding-left: 10px;
  padding-right: 10px;
  opacity: 0.5;
}


#left-nav {
  z-index: 0;
  position: absolute;
  left: 0px;
  padding-top: 15px;
  height: 100%;
  background-color: #e5e5e5;
}

#left-nav img {
  width: 28px;
  height: auto;
  margin-left: 10px;
  margin-right: 14px;
  cursor: pointer;
}

#left-nav ul {
  list-style: none;
  padding-left: 0px;
}
#left-nav li {
  margin-bottom: 15px;
  color: #444;
}

#right-nav {
  z-index: 0;
  overflow: auto;
  position: absolute;
  right: 0px;
  height: 100%;
  background-color: #e5e5e5;
}

#content {
  z-index: 1;
  overflow: auto;
  position: absolute;
  background-color: #fdfdfd;
  padding: 15px 0px 15px 0px;
  border-left: 1px solid rgb(192, 192, 192);
  border-right: 1px solid rgb(192, 192, 192);
  transition: .3s ease;
}

h1, h2, h3, h4, h5, h6 {
  color: #444;
}

.no-greyscale {
  -webkit-filter: none !important; /* Safari 6.0 - 9.0 */
  filter: none !important;
}

.no-greyscale span {
  font-weight: 600;
  color: #00A9DD;
}

.toggler {
  cursor: pointer;
}
</style>

