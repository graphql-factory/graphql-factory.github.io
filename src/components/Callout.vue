<template lang="pug">
  .bs-callout.alert.text-left(:class="clazz")
    slot
</template>

<script type="text/babel">
  export default {
    props: {
      type: {
        type: String,
        default: 'primary'
      }
    },
    computed: {
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