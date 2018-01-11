<template lang="pug">
  li.vue-tree-item
    .vue-tree-item-bullet.vue-tree-branch(
      v-if="!isLeaf",
      v-html="open ? openBullet : closedBullet",
      @click="toggleBranch",
      :class="`vue-tree-item-depth-${depth}`"
    )
    .vue-tree-item-bullet.vue-tree-leaf(
      v-else,
      v-html="leafBullet",
      :class="`vue-tree-item-depth-${depth}`"
    )
    .vue-tree-item-content(
      v-if="!isLeaf",
      @click="toggleBranch",
      v-html="config.content || '&nbsp;'",
      :class="`vue-tree-item-depth-${depth}`"
    )
    .vue-tree-item-content(
      v-else,
      :class="`vue-tree-item-depth-${depth}`"
    )
      component(:is="contentTag", :to="config.route", :href="config.href")
        div(v-html="config.content || '&nbsp;'")
    ul.vue-tree-branch(v-if="!isLeaf && open", :style="branchStyle")
      tree-item(
        v-for="(item, idx) in this.config.items || {}",
        :key="idx",
        :path="`${path}.items.${idx}`",
        :config="item",
        :root-config="rootConfig",
        :state="state",
        :depth="depth + 1"
      )
</template>

<script type="text/babel">
// recursively close all the child items
function recursiveClose (state, path) {
  const items = state[`${path}.items`]
  if (items) {
    Object.keys(items).forEach(key => {
      state[`${path}.items.${key}.open`] = false
      recursiveClose(state, `${path}.items.${key}`)
    })
  }
}

function isObjectLike (object) {
  return typeof object === 'object' && object !== null
}

function isFunction (fn) {
  return typeof fn === 'function'
}

export default {
  name: 'tree-item',
  props: {
    config: {
      type: Object,
      required: true
    },
    rootConfig: {
      type: Object,
      required: true
    },
    state: {
      type: Object,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    depth: {
      type: Number,
      default: 1
    }
  },
  computed: {
    branchStyle () {
      return {
        'padding-left': this.config.indent
            ? isFunction(this.config.indent)
              ? this.config.indent(this)
              : this.config.indent
            : this.rootConfig.indent
              ? isFunction(this.rootConfig.indent)
                ? this.rootConfig.indent(this)
                : this.rootConfig.indent
              : '1em'
      }
    },
    contentTag () {
      return this.config.route
        ? 'router-link'
          : this.config.href
          ? 'a'
        : 'div'
    },
    isLeaf () {
      return !Array.isArray(this.config.items)
    },
    openBullet () {
      return this.bullets.open
        ? isFunction(this.bullets.open)
          ? this.bullets.open(this)
          : this.bullets.open
        : '-'
    },
    closedBullet () {
      return this.bullets.closed
        ? isFunction(this.bullets.closed)
          ? this.bullets.closed(this)
          : this.bullets.closed
        : '+'
    },
    leafBullet () {
      return this.bullets.leaf
        ? isFunction(this.bullets.leaf)
          ? this.bullets.leaf(this)
          : this.bullets.leaf
        : this.bullets.leaf === null
          ? ''
          : '•'
    },
    bullets () {
      return isObjectLike(this.config.bullets)
        ? this.config.bullets
        : isObjectLike(this.rootConfig.bullets)
          ? this.rootConfig.bullets
          : {}
    }
  },
  methods: {
    toggleBranch () {
      const openPath = `${this.path}.open`
      if (this.isLeaf) return
      this.open = this.state[openPath] = !this.state[openPath]
      if (!this.open && this.rootConfig.recursiveClose !== false) {
        recursiveClose(this.state, this.path)
      }
    }
  },
  data () {
    return {
      open: this.state[`${this.path}.open`]
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}

.vue-tree-item-bullet, .vue-tree-item-content {
  display: inline-block;
}
</style>
