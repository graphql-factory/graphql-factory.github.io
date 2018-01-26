<template lang="pug">
  table
    thead(v-if="showHead", :class="headClass")
      tr
        th(v-for="header in headers" scope="col") {{header.title}}
    tbody
      tr(v-for="row in rows")
        td(v-for="(col, index) in headers", v-html="rowContent(row, index)")
</template>

<script type="text/babel">
import _ from '../../common/litedash'

export default {
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  methods: {
    rowContent (row, index) {
      return row.length < index + 1 ? '&nbsp;' : row[index]
    }
  },
  computed: {
    showHead () {
      return _.get(this.config, [ 'showHead' ]) !== false
    },
    headClass () {
      return _.get(this.config, [ 'headClass' ])
    },
    headers () {
      return _.get(this.config, [ 'headers' ], [])
    },
    rows () {
      return _.get(this.config, [ 'rows' ], [])
    }
  }
}
</script>
