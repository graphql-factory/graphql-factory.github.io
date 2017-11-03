<template lang="pug">
  .container-fluid
    .text-left
      h3 Definitions
      p
        | Factory definitions are the basis for creating a GraphQL Factory library which contains type
        | and schema objects along with helper methods. They contain extended graphql configuration
        | objects with a few tweaks and shortcuts.
      h5 # Structure
      p
        | A factory definition has types, schemas, functions, and context keys. Types and schemas are
        | required and the rest are optional. Each value is itself an object.
      prism.prism-custom(language="javascript", :code="defStructure")
      h5 # Using Definitions
      p
        | Definitions are merged with plugins, native graphql types and schemas, functions, and schema
        | language definitions using the all purpose <code>use()</code> method.
      prism.prism-custom(language="javascript", :code="use")
    router-link.next-section.pull-left.text-left(:to="{ name: 'learn.typeDefinitions' }")
      span Continue Reading →
      h4 Type Definitions
</template>

<script type="text/babel">
  import Prism from 'vue-prismjs'
  export default {
    components: {
      Prism
    },
    data () {
      return {
        defStructure: `{
  types: {},
  schemas: {},
  functions: {},
  context: {}
}`,
        use: `factory
  .use(definition)
  .use(plugin)
  .use(() => { ... }, 'functionName')
  .use(new GraphQLSchema({ ... }), 'schemaName')
  .use(schemaLanguage, resolverMap, 'schemaName')
}`
      }
    }
  }
</script>
