<template lang="pug">
  .link-menu.text-left.menu-nav-content
    p
    tree.api-menu(ref="menu", :config="config", state="apiMenuState", :hub="hub")
</template>

<script type="text/babel">
import Tree from '../tree/Tree'
import config from '../../data/api/menu'
import { mapGetters } from 'vuex'
import hub from '../../hub'
export default {
  components: {
    Tree
  },
  computed: {
    ...mapGetters([
      'apiMenuState'
    ])
  },
  created () {
    if (!Object.keys(this.apiMenuState).length) {
      this.$nextTick(() => {
        this.hub.$emit('tree.expand.all')
      })
    }
  },
  data () {
    return {
      config,
      hub
    }
  }
}
</script>


<style>
.api-menu {
  margin-left: 15px;
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