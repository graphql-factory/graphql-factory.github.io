<template lang="pug">
  .link-menu.text-left
    p
    ul
      li(style="color: #000; font-weight: 300;")
        h3 Site Map
      router-link(v-for="(route, index) in menuRoutes",
      tag="li", :key="index",
      :to="route.path",
      v-text="route.meta.title")
</template>

<style scoped>
  .link-menu > ul {
    list-style: none;
  }
  .link-menu > ul > li {
    font-size: 1em;
    cursor: pointer;
  }

  .link-menu > ul > li:first-child {
    color: #5bafdb;
    font-weight: 600;
  }

  li.active {
    color: #5bafdb;
    display: list-item;
    list-style: disc outside;
  }
</style>

<script type="text/babel">
  import _ from '../../common/litedash'
  export default {
    computed: {
      menuRoutes () {
        return _.get(this.$router, 'options.routes', []).slice(1)
      }
    }
  }
</script>