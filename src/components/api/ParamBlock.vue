<template lang="pug">
  div
    b.property.mono(v-html="name + ' '") 
    code(v-if="config.type", v-html="'{' + config.type + '} '")
    span(v-if="config.description", v-html="' - ' + config.description")
    ul(v-if="config.children")
      param-block-child(v-for="(child, index) in config.children", :key="index", :config="child")
</template>

<script type="text/babel">
import ParamBlockChild from '@/components/api/ParamBlockChild'
export default {
  components: {
    ParamBlockChild
  },
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
  props: ['config']
}
</script>

<style scoped>
.property, .property li {
  color: #3f87a6;
}
</style>