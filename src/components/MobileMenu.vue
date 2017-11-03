<template lang="pug">
  .mobile-overlay-menu.text-left
    .container.bg-factory.text-white.mobile-header
      h4
        i.fa.fa-times(@click="toggleMobileMenu")
        | &nbsp;&nbsp;{{title}}
    learn-menu.readable-text.scrollable.custom-scroll(v-if="$route.name.match('learn')", :style="bodyStyle")

</template>

<script type="text/babel">
  import LearnMenu from './LearnMenu'
  import { mapActions } from 'vuex'
  export default {
    computed: {
      title () {
        if (this.$route.name.match('learn')) {
          return 'Learn'
        } else {
          return this.$route.meta.title
        }
      },
      bodyStyle () {
        return {
          height: `${window.innerHeight - 76}px`,
          overflow: 'auto'
        }
      }
    },
    components: {
      LearnMenu
    },
    methods: {
      ...mapActions([
        'toggleMobileMenu'
      ])
    }
  }
</script>

<style scoped>
  .mobile-header {
    padding: 20px;
    height: 76px;
  }
  .top-content {
    margin-top: 60px;
  }
  .readable-text {
    font-size: 1.4em !important;
  }
  .scrollable {
    overflow: auto !important;
  }
</style>