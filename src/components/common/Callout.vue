<template lang="pug">
  .bs-callout.alert.text-left(:class="clazz", v-html="markup")
</template>

<script type="text/babel">
  export default {
    name: 'callout',
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      html: String
    },
    computed: {
      markup () {
        return this.html.replace(/```(\S+)```/g, '<code>$1</code>')
      },
      clazz () {
        return [
          `bs-callout-${this.type}`,
          `alert-${this.type}`
        ]
      }
    }
  }
</script>

<style scoped>
  .bs-callout {
    font-size: 0.85em;
    padding: 10px;
    border-radius: 0px;
    border-top: none;
    border-bottom: none;
    border-right: none;
  }
</style>