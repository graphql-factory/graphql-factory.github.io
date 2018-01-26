<template lang="pug">
  component(:is="type", :id="anchor ? anchor + '-anchor' : null", v-html="html")
</template>

<script type="text/babel">
import _ from '../../common/litedash'
export default {
  name: 'heading',
  props: {
    config: {
      type: Object,
      required: true
    },
    html: {
      type: String,
      required: true
    }
  },
  computed: {
    type () {
      return _.get(this.config, [ 'type' ], 'h3')
    },
    anchor () {
      return _.get(this.config, [ 'anchor' ])
    }
  }
}
</script>
