<template lang="pug">
  .link-menu.text-left.menu-nav-content
    p
    tree.learn-menu(ref="menu", :config="config", :state="state")
</template>

<script type="text/babel">
import Tree from '../tree/Tree'
import config from '../../data/learn/menu'
import _ from '../../common/litedash'
export default {
  components: {
    Tree
  },
  data () {
    return {
      config,
      state: {
        items: {
          0: { open: true },
          1: { open: true },
          2: { open: true },
          3: { open: true },
          4: { open: true },
          5: { open: true },
          6: { open: true }
        }
      }
    }
  },
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

<style>
.learn-menu {
  margin-left: 5px;
}

.learn-menu .vue-tree-item-content {
  font-size: 0.8em;
  font-family: consolas,"Liberation Mono",courier,monospace;
}

.learn-menu .vue-tree-item-depth-1 {
  color: #3f87a6;
  font-weight: 600;
}

.learn-menu .vue-tree-item-depth-2 {
  color: #555;
  font-weight: 600;
}

.learn-menu .vue-tree-item-depth-3, .learn-menu .vue-tree-item-depth-3 a {
  color: #3f87a6;
}

.learn-menu .vue-tree li {
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>
