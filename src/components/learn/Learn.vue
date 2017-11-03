<template lang="pug">
  .row.small-gutters
    .col-sm-9
      router-view
      p
    .col-sm-3
      learn-menu(v-if="!isMobile")
</template>

<script type="text/babel">
  import { mapGetters } from 'vuex'
  import LearnMenu from '@/components/learn/LearnMenu'
  export default {
    computed: {
      ...mapGetters([
        'isMobile'
      ])
    },
    components: {
      LearnMenu
    }
  }
</script>