<template lang="pug">
  ul.vue-tree.vue-tree-root(style="list-style: none; padding-left: 0px;")
    tree-item(
      v-for="(item, idx) in config.items",
      :key="idx",
      :path="`items.${idx}`",
      :config="item",
      :root-config="config",
      :state="_state",
      :hub="hub"
    )
</template>

<script type="text/babel">
import TreeItem from './TreeItem'
import Vue from 'vue'

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
    },
    hub: {
      type: Object,
      default () {
        return new Vue()
      }
    }
  },
  created () {
    this.hub
    .$on('tree.expand.all', () => {
      this.setAll(true)
    })
    .$on('tree.collapse.all', () => {
      this.setAll(false)
    })
  },
  computed: {
    _state () {
      return this.$deepModel(this.state)
    }
  },
  methods: {
    setAll (value = true) {
      const expand = (cnf, path) => {
        if (typeof cnf === 'object' && cnf && Array.isArray(cnf.items)) {
          cnf.items.forEach((item, index) => {
            const p = `${path}["${index}"]`
            this._state[`${p}.open`] = value
            expand(item, `${p}.items`)
          })
        }
      }
      expand(this.config, 'items')
    }
  }
}
</script>

<style scoped>
</style>
