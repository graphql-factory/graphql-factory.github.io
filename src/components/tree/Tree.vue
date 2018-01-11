<template lang="pug">
  ul.vue-tree.vue-tree-root(style="list-style: none; padding-left: 0px;")
    tree-item(
      v-for="(item, idx) in config.items",
      :key="idx",
      :path="`items.${idx}`",
      :config="item",
      :root-config="config",
      :state="_state"
    )
</template>

<script type="text/babel">
import TreeItem from './TreeItem'
export default {
  components: {
    TreeItem
  },
  props: {
    config: {
      type: Object,
      required: true
    },
    state: {
      type: [String, Object],
      default () {
        return {}
      }
    }
  },
  computed: {
    _state () {
      return this.$deepModel(this.state, {
        dynamicUpdates: this.config.dynamicUpdates
      })
    }
  }
}
</script>

<style scoped>
</style>
