<template lang="pug">
  .container-fluid
    .text-left
      h3 Schema Definitions
      p
        | Schemas are the heart of graphql. Defining them in GraphQL Factory is simple. You have two
        | choices
      p
        | 1. Define <code>query</code>/<code>mutation</code>/<code>subscription</code> object(s)
        | in types and reference them in the schema definition
      prism.prism-custom(language="javascript", :code="objDef")
      p
      p
        | 2. Define <code>query</code>/<code>mutation</code>/<code>subscription</code> object(s)
        | directly in the schema definition
      prism.prism-custom(language="javascript", :code="opDef")
      p
        | Only the <code>query</code> operation is required and subscriptions are supported.
    router-link.next-section.pull-left.text-left(:to="{ name: 'learn.functions' }")
      span Continue Reading →
      h4 Functions
</template>

<script type="text/babel">
  import Prism from 'vue-prismjs'
  export default {
    components: {
      Prism
    },
    data () {
      return {
        objDef: `{
  types: {
    FooQuery: {
      ...
    },
    FooMutation: {
      ...
    },
    FooSubscription: {
      ...
    }
  },
  schemas: {
    Foo: {
      query: 'FooQuery',
      mutation: 'FooMutation',
      subscription: 'FooSubscription'
    }
  }
}`,
        opDef: `{
  types: {
    ...
  },
  schemas: {
    Foo: {
      query: {
        name: 'FooQuery',
        fields: {
          ...
        }
      },
      mutation: {
        name: 'FooMutation',
        fields: {
          ...
        }
      },
      subscription: {
        name: 'FooSubscription',
        fields: {
          ...
        }
      }
    }
  }
}`
      }
    }
  }
</script>