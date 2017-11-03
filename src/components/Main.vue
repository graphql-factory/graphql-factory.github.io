<template lang="pug">
  .container
    .container
      h2(:class="isMobile ? '' : 'display-3'", style="font-weight:400;") GraphQL Factory
      p.lead(:class="isMobile ? 'smaller-lead' : ''")
        | A graphql toolkit for building and extending graphql schemas + middleware
      img(src="../assets/graphql-factory-lg.png", style="max-width: 80%;")
      p
    div(style="display: table; margin: 0 auto;")
      a.twitter-follow-button(style="display: table-cell;", id="twttr-follow", href="https://twitter.com/graphqlfactory?ref_src=twsrc%5Etfw" data-show-count="false") Follow @graphqlfactory
      br(v-if="isMobile")
      gh-button(user="graphql-factory", type="follow", :flat="true", text="Follow @graphql-factory")
      br
      router-link.credits(:to="{ name: 'credits' }", exact)
        i.fa.fa-users
</template>

<script type="text/babel">
  import { mapGetters } from 'vuex'
  import GhButton from '@/components/GitHubButton.vue'
  export default {
    components: {
      GhButton
    },
    computed: {
      ...mapGetters([
        'isMobile'
      ])
    },
    mounted () {
      setTimeout(() => {
        window.twttr.widgets.load(
          document.getElementById('twttr-follow')
        )
      }, 20)
    }
  }
</script>

<style scoped>
  .smaller-lead {
    font-size: 0.9em;
  }
</style>