<template lang="pug">
  .row.small-gutters
    .col-sm-9
      router-view
    .col-sm-3
      api-menu(v-if="!isMobile")
</template>

<script type="text/babel">
  import { mapGetters } from 'vuex'
  import ApiMenu from './APIMenu.vue'
  export default {
    computed: {
      ...mapGetters([
        'isMobile'
      ])
    },
    components: {
      ApiMenu
    }
  }
</script>
