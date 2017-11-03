<template lang="pug">
  .container-fluid
    .text-left
      h3 Topic
    router-link.next-section.pull-left.text-left(:to="{ name: 'learn.middleware' }")
      span Continue Reading →
      h4 Whatevers Next
</template>

<script type="text/babel">
  import Prism from 'vue-prismjs'
  import Callout from '@/components/Callout'
  export default {
    components: {
      Callout,
      Prism
    },
    data () {
      return {
        typeDef: `{
  type: 'Object',
  fields: {
    ...
  }
}`
      }
    }
  }
</script>