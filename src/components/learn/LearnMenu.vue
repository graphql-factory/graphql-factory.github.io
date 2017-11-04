<template lang="pug">
  .link-menu.text-left
    p
    ul
      li(style="color: #000; font-weight: 300;")
        b Learn v3.0.0
    ul(v-for="(section, sIdx) in menuItems", :key="sIdx")
      router-link(v-for="(link, lIdx) in section",
      :key="lIdx",
      tag="li",
      :to="{ name: link.name }",
      active-class="active",
      v-text="link.meta.title", exact)
</template>

<script type="text/babel">
  import _ from '../../common/litedash'
  export default {
    computed: {
      menuItems () {
        const learn = _.get(this.$router, 'options.routes').filter(route => {
          return route.path === '/learn'
        })
        return _.get(learn, '0.children', []).reduce((accum, item) => {
          const section = _.get(item, 'meta.section')
          if (section) {
            accum.push([item])
          } else {
            accum[accum.length - 1].push(item)
          }
          return accum
        }, [])
      }
    }
  }
</script>

<style scoped>
  .link-menu > ul {
    list-style: none;
  }
  .link-menu > ul > li {
    font-size: 0.9em;
    cursor: pointer;
    border-left: 3px solid #5bafdb;
  }

  .link-menu > ul > li:first-child {
    color: #5bafdb;
    font-weight: 600;
    border-left: none;
  }

  .link-menu > ul > li:not(:first-child):before {
    content: "\00a0 ";
  }

  li.active {
    color: #5bafdb;
    display: list-item;
    list-style: disc outside;
  }
</style>