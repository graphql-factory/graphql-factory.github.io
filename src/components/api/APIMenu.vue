<template lang="pug">
  .link-menu.text-left.menu-nav-content
    p
    tree.api-menu(ref="menu", :config="config", :state="state")
</template>

<script type="text/babel">
import Tree from '../tree/Tree'
import config from '../../data/api/menu'
export default {
  components: {
    Tree
  },
  data () {
    return {
      config,
      state: {
        items: {
          '0': {
            open: true,
            items: {
              '3': {
                open: true
              }
            }
          },
          '1': {
            open: true,
            items: {
              '2': {
                open: true
              }
            }
          }
        }
      }
    }
  }
}
</script>


<style>
.api-menu {
  margin-left: 5px;
}

.api-menu .vue-tree-item-content {
  font-size: 0.8em;
  font-family: consolas,"Liberation Mono",courier,monospace;
}

.api-menu .vue-tree-item-depth-1 {
  color: #3f87a6;
  font-weight: 600;
}

.api-menu .vue-tree-item-depth-2 {
  color: #555;
  font-weight: 600;
}

.api-menu .vue-tree-item-depth-3, .api-menu .vue-tree-item-depth-3 a {
  color: #3f87a6;
}

.api-menu .vue-tree li {
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>