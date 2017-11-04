<template lang="pug">
  .instant-search
    form.form-inline.my-2.my-lg-0
      .input-group
        input.form-control(type="search", v-model="query", placeholder="Search site...")
        span.input-group-addon
          i.fa.fa-search
    .container(v-show="query !== ''")
      div(v-if="!results.length") No Results
      div(v-else, style="font-size: 0.9em;")
        .row.text-left(v-for="result in results", :key="result.objectID")
          router-link.result-line(:to="result.to")
            strong {{result.title}}
            | &nbsp;| {{result.description}}
</template>

<script type="text/babel">
  import { Component } from 'vue-instantsearch'
  export default {
    mixins: [Component],
    computed: {
      results () {
        return this.searchStore.results
      },
      query: {
        get () {
          return this.searchStore.query
        },
        set (value) {
          this.searchStore.stop()
          this.searchStore.query = value
          this.$emit('query', value)
          // We here ensure we give the time to listeners to alter the store's state
          // without triggering in between ghost queries.
          this.$nextTick(() => {
            this.searchStore.start()
            this.searchStore.refresh()
          })
        }
      }
    }
  }
</script>

<style scoped>
  .instant-search input.form-control {
    border-right: 0px;
    font-size: 0.8em;
    background: #fff;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .instant-search span.input-group-addon {
    background: #fff;
    border-left: 0px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .result-line {
    width:100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #000;
    padding: 5px 20px 5px 20px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
</style>