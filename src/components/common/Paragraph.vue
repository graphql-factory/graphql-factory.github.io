<template lang="pug">
  p(v-html="markup", style="margin-top: 30px;margin-bottom: 30px;")
</template>

<script type="text/babel">
  export default {
    name: 'paragraph',
    props: {
      html: String
    },
    computed: {
      markup () {
        return this.html.replace(/```(\S+)```/g, '<code>$1</code>')
      }
    }
  }
</script>