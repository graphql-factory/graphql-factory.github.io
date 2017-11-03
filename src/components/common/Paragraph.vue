<template lang="pug">
  p(v-html="markup")
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