<template lang="pug">
  .container
    .container
      h2(:class="isMobile ? '' : 'display-3'", style="font-weight:400;") GraphQL Factory
      p.lead(:class="isMobile ? 'smaller-lead' : ''")
        | A graphql toolkit for building and extending graphql schemas + middleware
      img.factory-logo(src="../../assets/graphql-factory.svg", :class="logoClass", :style="logoStyle", @click="animatingLogo=!animatingLogo")
      p
    div(style="display: table; margin: 0 auto;")
      a(href="https://github.com/graphql-factory/graphql-factory", target="_blank")
        i.btn.fa.fa-github.fa-2x
      a(href="https://twitter.com/graphqlfactory?ref_src=twsrc%5Etfw", target="_blank")
        i.btn.fa.fa-twitter.fa-2x
      a(href="https://medium.com/@graphqlfactory", target="_blank")
        i.btn.fa.fa-medium.fa-2x
    router-link.fa.fa-info-circle.credits(tag="i", :to="{ name: 'credits' }")
</template>

<script type="text/babel">
  import _ from '../../common/litedash'
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'isMobile'
      ]),
      logoClass () {
        return this.animatingLogo
          ? 'random-spin'
          : null
      }
    },
    methods: {
      randomSpeed () {
        const speed = _.random(2000, 7000)
        this.logoStyle = {
          'animation-duration': `${speed}ms`
        }
        return speed
      },
      newTimeout (speed) {
        setTimeout(() => {
          if (!this.animatingLogo) {
            this.logoStyle = null
            return
          }
          this.newTimeout(this.randomSpeed())
        }, speed)
      }
    },
    watch: {
      animatingLogo (animating) {
        if (!animating) {
          clearTimeout(this.timeout)
          this.logoStyle = null
        } else {
          this.newTimeout(this.randomSpeed())
        }
      }
    },
    data () {
      return {
        timeout: null,
        animatingLogo: false,
        logoStyle: null
      }
    }
  }
</script>

<style scoped>
  .smaller-lead {
    font-size: 0.9em;
  }
  i.fa.fa-twitter {
    color: #00aced;
  }
  i.fa.fa-github, i.fa.fa-medium {
    color: #24292e;
  }
  img.factory-logo {
    max-width: 80%;
    width: 350px;
    height: auto;
  }

  img.factory-logo.random-spin {
    animation-name: spin-clockwise;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-out;
    animation-fill-mode: revert;
  }
</style>