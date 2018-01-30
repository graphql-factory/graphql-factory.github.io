<template lang="pug">
  .container-fluid.api-class
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
        :config="param"
      )
      hr
    div(v-if="config.properties")
      h5
        |  Properties
      div(v-for="(prop, index) in config.properties", :key="index")
        h6.title(:id="prop.name + '-anchor'")
          b.property.mono(v-text="prop.name")
        span(v-html="prop.description")
      hr
    div(v-if="config.events")
      h5
        |  Events
      div(v-for="(event, index) in config.events", :key="index")
        h6.title(:id="'event.' + event.name + '-anchor'")
          b.property.mono(v-html="`${event.name} → <code>${event.dataType}</code>`")
        span(v-html="event.description")
      hr
    div(v-if="config.methods")
      h5
        |  Methods
      div(v-for="(method, index) in config.methods", :key="index")
        h5.title(:id="method.name + '-anchor'")
          b.property.mono(v-html="method.name + '()'")
        callout.mono(type="default", :html="method.signature")
        span(v-html="method.description")
        .bigspace(v-if="method.params")
          b Parameters
          p
          param-block(
            v-for="(param, index) in method.params",
            :key="index",
            :config="param"
          )
        .bigspace(v-if="method.examples")
          b Example{{method.examples.length > 1 ? 's' : ''}}
          prism.bordered(v-for="(example, index) in method.examples", :key="index", :language="example.language", :code="example.code")
        p(v-if="method.readMore")
          a(href="") Read more about this method →
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
.title {
  margin-top: 2em;
}
.bigspace {
  margin-top: 3em;
}
.property {
  color: #3f87a6;
}
hr {
  margin-bottom: 3em;
  margin-top: 3em;
}
</style>
