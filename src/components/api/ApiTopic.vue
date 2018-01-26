<template lang="pug">
  div
    component(v-for="(c, i) in config.content",
    :key="i",
    :is="c.component",
    :type="c.type",
    :code="c.code",
    :config="c.config"
    :language="c.language",
    :html="c.html",
    :items="c.items",
    :ordered="c.ordered",
    :class="getClass(c.component)")
</template>

<script type="text/babel">
  // import _ from '../../common/litedash'
  import Prism from 'vue-prismjs'
  import Callout from '@/components/common/Callout'
  import Paragraph from '@/components/common/Paragraph'
  import List from '@/components/common/List'
  import Grid from '@/components/common/Grid'
  import Heading from '@/components/common/Heading'
  export default {
    props: {
      config: {
        type: Object,
        required: true
      }
    },
    components: {
      Callout,
      Prism,
      Paragraph,
      List,
      Grid,
      Heading
    },
    methods: {
      getClass (type) {
        switch (type) {
          case 'prism':
            return ['prism-custom']
          default:
            return []
        }
      }
    }
  }
</script>

<style scoped>
</style>
