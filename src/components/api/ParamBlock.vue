<template lang="pug">
  div
    b.property.mono {{text}}
    ul(v-if="children")
      param-block-child(v-for="(child, index) in children", :key="index", :config="child")
</template>

<script type="text/babel">
import ParamBlockChild from '@/components/api/ParamBlockChild'
export default {
  components: {
    ParamBlockChild
  },
  props: ['text', 'children']
}
</script>

<style scoped>
.property, .property li {
  color: #3f87a6;
}
</style>