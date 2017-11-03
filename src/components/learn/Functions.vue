<template lang="pug">
  .container-fluid
    .text-left
      h3 Functions
      p
        | Functions are just that, functions. In GraphQL Factory, you can register functions in the definition
        | and reference them by their name. Functions can be used for field <code>resolve</code>,
        | <code>serialize</code>, <code>parseValue</code>,
        | <code>parseLiteral</code>, <code>isTypeOf</code>, etc.
        | You can register functions using a definition object
      prism.prism-custom(language="javascript", :code="def")
      p
        | or with the <code>use()</code> method with a function name
      prism.prism-custom(language="javascript", :code="use")
      p
        | and then reference by name
      prism.prism-custom(language="javascript", :code="ref")
    router-link.next-section.pull-left.text-left(:to="{ name: 'learn.context' }")
      span Continue Reading →
      h4 Context
</template>

<script type="text/babel">
  import Prism from 'vue-prismjs'
  import Callout from '@/components/Callout'
  export default {
    components: {
      Callout,
      Prism
    },
    data () {
      return {
        def: `{
  functions: {
    resolveFoo (source, args, context, info) {
      ...
    },
    serializeBar (value) {
      ...
    }
  }
}`,
        use: `function resolveFoo (source, args, context, info) {
  ...
}

function serializeBar (value) {
  ...
}

factory
  .use(resolveFoo, 'resolveFoo')
  .use(serializeBar, 'serializeBar')`,
        ref: `{
  types: {
    FooQuery: {
      fields: {
        listFoo: {
          type: '[Foo]',
          resolve: 'resolveFoo'
        }
      }
    }
  }
}`
      }
    }
  }
</script>