<template lang="pug">
  .container
    .container
      h2(:class="isMobile ? '' : 'display-3'", style="font-weight:400;") GraphQL Factory
      p.lead(:class="isMobile ? 'smaller-lead' : ''")
        | A graphql toolkit for building and extending graphql schemas + middleware
      img(src="../../assets/graphql-factory.svg", style="max-width: 80%;width: 350px;height: auto;")
      p
    div(style="display: table; margin: 0 auto;")
      a(href="https://github.com/graphql-factory/graphql-factory", target="_blank")
        i.btn.fa.fa-github.fa-2x
      a(href="https://twitter.com/graphqlfactory?ref_src=twsrc%5Etfw", target="_blank")
        i.btn.fa.fa-twitter.fa-2x
      a(href="https://medium.com/@graphqlfactory", target="_blank")
        i.btn.fa.fa-medium.fa-2x
</template>

<script type="text/babel">
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'isMobile'
      ])
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
</style>