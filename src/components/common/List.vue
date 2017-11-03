<template lang="pug">
  div
    ul(v-if="ordered !== true")
      li(v-for="(item, index) in items", :key="index", v-html="markup(item)")
    ol(v-if="ordered == true")
      li(v-for="(item, index) in items", :key="index", v-html="markup(item)")
</template>

<script type="text/babel">
  export default {
    props: {
      ordered: Boolean,
      items: Array
    },
    methods: {
      markup (html) {
        return html.replace(/```(\S+)```/g, '<code>$1</code>')
      }
    }
  }
</script>