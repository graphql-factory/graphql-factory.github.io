<template lang="pug">
  #app
    desktop-nav(ref="desktopNav", v-if="!isMobile")
    mobile-nav(ref="mobileNav", v-if="isMobile")
</template>

<script type="text/babel">
  import MobileNav from '@/components/navigation/mobile/MobileNav'
  import DesktopNav from '@/components/navigation/desktop/DesktopNav'
  import { mapGetters, mapActions } from 'vuex'

  const MOBILE_WIDTH = 769

  export default {
    name: 'app',
    mounted () {
      this.checkMobile()

      // listen for resize events and update mobile/dimensions
      this.$hub.$on('resize', () => {
        this.checkMobile()
      })

      // listen for window resizes and emit a resize event to the hub
      window.onresize = () => {
        this.$hub.$emit('resize')
      }
    },
    components: {
      MobileNav,
      DesktopNav
    },
    computed: {
      ...mapGetters([
        'isMobile',
        'showMobileMenu',
        'dimensions'
      ])
    },
    methods: {
      ...mapActions([
        'toggleMobileMenu',
        'setDimensions',
        'setMobile'
      ]),
      checkMobile () {
        const isMobile = document.body.clientWidth < MOBILE_WIDTH ||
          window.innerHeight < MOBILE_WIDTH
        this.setMobile(isMobile)
        this.updateDimensions(isMobile)
      },
      updateDimensions (isMobile) {
        this.$nextTick(() => {
          const { topNav, leftNav, rightNav } = isMobile
            ? this.$refs.mobileNav.$refs
            : this.$refs.desktopNav.$refs

          this.setDimensions({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            topNavHeight: topNav.offsetHeight,
            leftNavWidth: isMobile ? 0 : leftNav.offsetWidth,
            rightNavWidth: isMobile ? 0 : rightNav.offsetWidth
          })
        })
      }
    }
  }
</script>

<style>
html, body, #app {
  position: relative;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  overflow: hidden;
}
</style>

