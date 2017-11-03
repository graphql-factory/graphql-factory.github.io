<template lang="pug">
  .container-fluid
    .text-left
      h3 Context
      callout(type="info")
        | Note that <b>context</b> as it is known in <b>v3</b> was in <b>v2</b> bound to the function <code>this</code> context. This
        | made arrow functions unsupported for passing context. In <b>v3</b> <code>resolve</code> functions are no
        | longer bound to context and instead are passed a merged context value.
      p
        | A factory definition can contain a <code>context</code> property that will be merged and passed to each
        | <code>resolve</code> function/middleware in the <code>context</code> argument. This makes passing things
        | like database cursors and global data to resolvers simple making resolve code less repetitive.
      p
        | When "using" multiple definitions that specify context, each context is merged over the existing to create
        | a single context object that is then merged with the context object in each request.
      p
        | Non-resolve functions still have the context bound to functions <code>this</code> context, so arrow functions
        | should not be used if context access is needed.
      p
        | A default context contains
      ul
        li <code>graphql</code> the graphql library
        li <code>lib</code> the GraphQL Factory library instance
      prism.prism-custom(language="javascript", :code="example1")
    router-link.next-section.pull-left.text-left(:to="{ name: 'learn.typeLanguage' }")
      span Continue Reading →
      h4 Type Language
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
        example1: `import rdash from 'rethinkdbdash'

const definition = {
  context: {
    r: rdash({ ... })
  },
  types: {
    Foo: {
      ...
    },
    FooQuery: {
      fields: {
        listFoo: {
          type: '[Foo]!'
          resolve (source, args, context, info) {
            const { r, lib } = context
            lib.emit('info', info)
            return r.table('foo')
          }
        }
      }
    }
  },
  schemas: {
    FooSchema: {
      query: 'FooQuery'
    }
  }
}`
      }
    }
  }
</script>