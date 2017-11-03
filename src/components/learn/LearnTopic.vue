<template lang="pug">
  .container-fluid.text-left
    h3(v-text="config.title")
    component(v-for="(c, i) in config.content",
    :key="i",
    :is="c.component",
    :type="c.type",
    :code="c.code",
    :language="c.language",
    :html="c.html",
    :items="c.items",
    :ordered="c.ordered",
    :class="getClass(c.component)")
    p.foot-space
      router-link.btn.text-left.next-topic(tag="button", v-if="config.next", :to="{ name: config.next.name }")
        span Next Topic →
        h4(v-text="config.next.title")
</template>

<script type="text/babel">
  import _ from '../../common/litedash'
  import Prism from 'vue-prismjs'
  import Callout from '@/components/common/Callout'
  import Paragraph from '@/components/common/Paragraph'
  import List from '@/components/common/List'
  export default {
    computed: {
      config () {
        return _.get(this.$route, 'meta.config', {})
      }
    },
    components: {
      Callout,
      Prism,
      Paragraph,
      List
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
  p.foot-space {
    margin-top: 50px;
  }
  .next-topic > span {
    font-size: 0.9em;
  }
  button.next-topic {
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 20px 20px 12px 20px;
  }
  button.next-topic:hover {
    color: #fdfdfd;
    background-color: #00aced;
  }
</style>
