<template lang="pug">
  li
    b.property.mono(v-html="name + ' '") 
    code(v-html="'{' + config.type + '} '")
    span(v-html="' - ' + config.description")
    ul(v-if="config.children")
      param-block-child(v-for="(child, index) in config.children", :key="index", :config="child")
</template>

<script type="text/babel">
export default {
  name: 'param-block-child',
  computed: {
    defaultValue () {
      return this.config.defaultValue !== undefined
        ? `=${this.config.defaultValue}`
        : ''
    },
    name () {
      return this.config.optional === true
        ? `[${this.config.name}${this.defaultValue}]`
        : `${this.config.name}${this.defaultValue}`
    }
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.property {
  color: #3f87a6;
}
</style>