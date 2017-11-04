<template lang="pug">
  .container
    search-index(:app-id="algolia.appId", :api-key="algolia.apiKey", :index-name="algolia.indexName", :query-parameters="queryParams")
      search-page
</template>

<script type="text/babel">
  import SearchPage from '@/components/search/SearchPage'
  import { Index } from 'vue-instantsearch'
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'algolia'
      ])
    },
    components: {
      SearchPage,
      SearchIndex: Index
    },
    data () {
      return {
        queryParams: {}
      }
    }
  }
</script>

<style scoped>
  .ais-index {

  }
</style>