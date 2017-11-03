<template lang="pug">
  #app
    transition(name="slide")
      mobile-menu(v-show="isMobile && showMobileMenu")
    nav.navbar.navbar-expand-lg.navbar-light.fixed-top(v-if="!isMobile", id="top-nav", ref="topNav")
      .container(v-if="!isMobile")
        .navbar-collapse.collapse
          router-link.navbar-brand(:to="{ name: 'main' }", exact)
            img.logo-desktop(src="./assets/graphql-factory-35px.png")
          ul.navbar-nav.mr-auto.mt-2.mt-lg-0
            router-link.nav-item(v-for="(route, idx) in menuRoutes",
            :key="idx", tag="li", active-class="active",
            :to="{ name: route.meta.default || route.name }", :exact="route.meta.exact")
              a.nav-link {{route.meta.title}}
          form.form-inline.my-2.my-lg-0
            .input-group
              input.form-control(type="search", style="border-right: 0px; font-size: 0.8em;")
              span.input-group-addon(style="background: transparent;border-left: 0px;")
                i.fa.fa-search
    nav.mobile.top-nav(v-if="isMobile", ref="mobileTopNav")
        router-link.mobile-brand(:to="{ name: 'main' }")
          img(src="./assets/graphql-factory-35px.png")
        span.header-text(v-text="$route.meta.title")
        i.fa.fa-bars.mobile-menu-bars(@click="toggleMobileMenu")
    nav.mobile.bottom-nav(v-if="isMobile", ref="mobileBottomNav")
      .row
        router-link.col.nav-item(tag="div", active-class="active-bottom-nav", :to="{ name: 'learn'}", :exact="false")
          img(src="./assets/learning.svg")
        router-link.col.nav-item(tag="div", active-class="active-bottom-nav", :to="{ name: 'docs'}", exact)
          img(src="./assets/library.svg")
        router-link.col.nav-item(tag="div", active-class="active-bottom-nav", :to="{ name: 'search'}", exact)
          img(src="./assets/search.svg")
        router-link.col.nav-item(tag="div", active-class="active-bottom-nav", :to="{ name: 'tutorials'}", exact)
          img(src="./assets/web-development.svg")
        router-link.col.nav-item(tag="div", active-class="active-bottom-nav", :to="{ name: 'plugins'}", exact)
          img(src="./assets/socket.svg")
    main(id="main", role="main", :style="mainStyle", :class="isMobile ? '' : 'custom-scroll'")
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
        'dimensions'
      ]),
      mainStyle () {
        const { windowHeight, topNav, bottomNav } = this.dimensions
        const paddingTop = this.isMobile ? '10px' : null
        return {
          'padding-top': paddingTop,
          'overflow': 'auto',
          'margin-top': `${topNav}px`,
          'max-height': `${windowHeight - topNav - bottomNav}px`
        }
      },
      menuRoutes () {
        return _.get(this.$router, 'options.routes', []).slice(1)
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
        document.body.style.overflow = isMobile
          ? ''
          : 'hidden'
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
