<template lang="pug">
  .container-fluid
    h4(style="margin-top: 1em;")
      i(style="color: #3f87a6;") class 
      | {{config.heading}}
    p(v-html="config.description")
    br
    prism.bordered(
      v-if="config.constructor.example",
      :language="config.constructor.example.language",
      :code="config.constructor.example.code"
    )
    hr
    div(v-if="config.constructor")
      h5
        |  Constructor
      p
        | Creates a new instance of&nbsp;
        code {{config.heading}}
      callout.mono(type="default", :html="config.constructor.signature")
      param-block(
        v-for="(param, index) in config.constructor.params",
        :key="index",
        :text="param.name",
        :children="param.children"
      )
      hr
    div(v-if="config.properties")
      h5
        |  Properties
      div(v-for="(prop, index) in config.properties", :key="index")
        h6.title
          b.property.mono(v-text="prop.name")
        span(v-html="prop.description")
      hr
    div(v-if="config.events")
      h5
        |  Events
      div(v-for="(event, index) in config.events", :key="index")
        h6.title
          b.property.mono(v-html="`${event.name} → <code>${event.dataType}</code>`")
        span(v-html="event.description")
      hr
</template>

<script type="text/babel">
import Prism from 'vue-prismjs'
import Callout from '@/components/common/Callout'
import ParamBlock from '@/components/api/ParamBlock'
export default {
  components: {
    Prism,
    ParamBlock,
    Callout
  },
  computed: {
    config () {
      return this.$route.meta.config || {}
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.bordered {
  border: 1px solid rgb(236, 235, 235);
}
.title {
  margin-top: 2em;
}
.property {
  color: #3f87a6;
}
hr {
  margin-bottom: 3em;
  margin-top: 3em;
}
</style>
