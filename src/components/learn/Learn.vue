<template lang="pug">
  .container-fullwidth
    router-view
    p
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