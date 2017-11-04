<template lang="pug">
  #app
    transition(name="slide")
      mobile-menu(v-show="isMobile && showMobileMenu")
    nav.navbar.navbar-expand-lg.navbar-light.fixed-top(v-if="!isMobile", id="top-nav", ref="topNav")
      .container(v-if="!isMobile")
        .navbar-collapse.collapse
          router-link.navbar-brand(:to="{ name: 'welcome' }", exact)
            img.logo-desktop(src="./assets/graphql-factory.svg", style="height: 35px;")
          ul.navbar-nav.mr-auto.mt-2.mt-lg-0
            router-link.nav-item(v-for="(route, idx) in menuRoutes",
            :key="idx", tag="li", active-class="active",
            :to="{ name: route.meta.default || route.name }", :exact="route.meta.exact")
              a.nav-link {{route.meta.title}}
          form.form-inline.my-2.my-lg-0
            .input-group
              // ais-index(:app-id="algolia.appId", :api-key="algolia.apiKey", :index-name="algolia.indexName")
                ais-search-box
                .search-results
                  ais-results(inline-template)
                    table.table.table-bordered.table-striped(style="margin-bottom: 0px;")
                      tbody
                        router-link(tag="tr", :to="result.to", v-for="result in results", :key="result.objectID", style="cursor: pointer;")
                          th(scope="row", v-text="result.title")
                          td(v-text="result.description")
              input.form-control(type="search", style="border-right: 0px; font-size: 0.8em;")
              span.input-group-addon(style="background: transparent;border-left: 0px;")
                i.fa.fa-search
    nav.mobile.top-nav(v-if="isMobile", ref="mobileTopNav")
        router-link.mobile-brand(:to="{ name: 'welcome' }")
          img(src="./assets/graphql-factory.svg", style="height: 35px;")
        span.header-text(v-text="$route.meta.title")
        i.fa.fa-bars.mobile-menu-bars(@click="toggleMobileMenu")
    nav.mobile.bottom-nav(v-if="isMobile", ref="mobileBottomNav")
      .row
        router-link.col.nav-item(tag="div", active-class="active-bottom-nav", :to="{ name: 'learn'}", :exact="false")
          img(src="./assets/mobile/learning.svg")
        router-link.col.nav-item(tag="div", active-class="active-bottom-nav", :to="{ name: 'api'}", exact)
          img(src="./assets/mobile/api.svg")
        router-link.col.nav-item(tag="div", active-class="active-bottom-nav", :to="{ name: 'search'}", exact)
          img(src="./assets/mobile/search.svg")
        router-link.col.nav-item(tag="div", active-class="active-bottom-nav", :to="{ name: 'tutorials'}", exact)
          img(src="./assets/mobile/tutorials.svg")
        router-link.col.nav-item(tag="div", active-class="active-bottom-nav", :to="{ name: 'plugins'}", exact)
          img(src="./assets/mobile/plugins.svg")
    main.custom-scroll(id="main", role="main", :style="mainStyle")
      .container
        router-view
</template>

<script type="text/babel">
  import _ from './common/litedash'
  import MobileMenu from '@/components/MobileMenu'
  import { mapGetters, mapActions } from 'vuex'
  import hub from './hub'

  const MOBILE_WIDTH = 769

  export default {
    name: 'app',
    mounted () {
      this.updateMobile()
      window.onresize = () => {
        hub.$emit('resize', {
          width: document.body.clientWidth,
          height: document.body.clientHeight
        })
        this.updateMobile()
      }
    },
    components: {
      MobileMenu
    },
    computed: {
      ...mapGetters([
        'isMobile',
        'showMobileMenu',
        'dimensions',
        'algolia'
      ]),
      mainStyle () {
        const { windowHeight, topNav, bottomNav } = this.dimensions
        const paddingTop = this.isMobile ? '10px' : null
        const overflowY = this.isMobile ? 'scroll' : 'auto'
        const mainHeight = `${windowHeight - topNav - bottomNav}px`
        return {
          'padding-top': paddingTop,
          'overflow-y': overflowY,
          'margin-top': `${topNav}px`,
          'height': mainHeight,
          'max-height': mainHeight
        }
      },
      menuRoutes () {
        return _.get(this.$router, 'options.routes', []).filter(route => {
          return _.get(route, 'meta.desktopMenu') === true
        })
      }
    },
    methods: {
      ...mapActions([
        'toggleMobileMenu',
        'setDimensions',
        'setMobile'
      ]),
      updateMobile () {
        const isMobile = document.body.clientWidth < MOBILE_WIDTH ||
          window.innerHeight < MOBILE_WIDTH
        this.setMobile(isMobile)
        this.updateDimensions(isMobile)
      },
      updateDimensions (isMobile) {
        this.$nextTick(() => {
          const { topNav, mobileTopNav, mobileBottomNav } = this.$refs

          if (isMobile) {
            this.setDimensions({
              windowHeight: window.innerHeight,
              topNav: mobileTopNav.offsetHeight,
              bottomNav: mobileBottomNav.offsetHeight
            })
          } else {
            this.setDimensions({
              windowHeight: window.innerHeight,
              topNav: topNav.offsetHeight,
              bottomNav: 0
            })
          }
        })
      }
    }
  }
</script>

<style>
  .ais-index input {
    border: 1px solid rgb(206, 212, 218);
    padding: 6px 12px 6px 12px;
    font-size: 0.8em;
    border-radius: 2px;
    box-sizing: border-box;
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
  }

  .ais-search-box__submit {
    display: none;
  }

  .ais-clear {
    display: none;
  }

  .search-results {
    font-size: 0.9em;
    border-radius: 3px;
    border: none;
    /* box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2); */
    min-width: 350px;
    background-color: #fdfdfd;
    padding: 0px;
    position: absolute;
    margin-top: 5px;
    right: 0px;
    z-index: 1050;
  }
</style>