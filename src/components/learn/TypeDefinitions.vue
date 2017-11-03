<template lang="pug">
  .container-fluid
    .text-left
      h3 Type Definitions
      p
        | Type definitions are almost identical to native graphql type configurations except that since
        | types are generated at the same time, we need to add a little bit of extra information and
        | reference other types using the schema definition format for types.
      p
        | Types are always placed in the factory definition <code>types</code> key and are keyed on
        | the type name.
      h5 # Object Type Field
      p
        | In order to distinguish what GraphQL type a type definition should create, simply add a type key
        | to the root of the type definition with the object type short name.
      prism.prism-custom(language="javascript", :code="typeDef")
      p
        | Acceptable object type short name values are
      ul(style="font-size: 0.8em;")
        li
          code Object
          | &nbsp;(default, can be omitted)
        li
          code Enum
        li
          code Scalar
        li
          code Input
        li
          code Interface
        li
          code Union
      h5 # Field & Argument Types
      p
        | Field and argument configurations both contain a type key. In graphql you would place a reference
        | to an actual type object. In GraphQL Factory you instead use a type language type string like&nbsp;
        code "ID!"
        | .
      p
        | Additionally when specifying a field/arg configuration that containtains a type, you can simply put
        | the type string instead of an object with a type key containing the type string.
      prism.prism-custom(language="javascript", :code="typeString")
      p
        | Some type string examples are
      ul
        li
          code "String"
          | &nbsp;- A <code>String</code> type
        li
          code "String!"
          | &nbsp;- A non-null <code>String</code> type
        li
          code "[Foo]"
          | &nbsp;- A list of <code>Foo</code> type
        li
          code "[Foo]!"
          | &nbsp;- A non-null list of <code>Foo</code> type
        li
          code "[Bar!]"
          | &nbsp;- A list of non-null <code>Bar</code> type
        li
          code "[Bar!]!"
          | &nbsp;- A non-null list of non-null <code>Bar</code> type
      h5 # Inter-mixing graphql
      p
        | Every object that is "used" in a definition goes through an expand process that checks the
        | structure, fills in missing information, and decomposes graphql types/schemas into factory
        | definitions. This allows for inter-mixing of graphql objects with factory definitions making
        | the following a completely valid definition
      prism.prism-custom(language="javascript", :code="interMix")
      h5 # Custom Fields
      p
        | Custom fields can be added by adding non-reserved keys to the type definition.
        | As a best practice, custom fields should be prefixed with an underscore. Custom fields can
        | be useful to middleware and resolver functions to add data that can help the
        | middleware/resolver make a decision on how data should be processed or requested.
      prism.prism-custom(language="javascript", :code="customFields")
      h5 # Type Extension
      p
        | Not currently implemented
    router-link.next-section.pull-left.text-left(:to="{ name: 'learn.schemaDefinitions' }")
      span Continue Reading →
      h4 Schema Definitions
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
        typeDef: `{
  types:{
    Foo: {
      type: 'Object',
      name: 'Foo',
      fields: {
        ...
      }
    }
  },
  schemas: {
    ...
  }
}`,
        typeString: `{
  types:{
    Foo: {
      name: 'Foo',
      fields: {
        id: { type: 'ID!' }
      }
    },
    FooQuery: {
      // type can be omitted and 'Object' will be used
      // name can be omitted and key will be used
      fields: {
        listFoo: {
          type: '[Foo]!',
          args: {
            id: 'ID' // value can be supplied as string instead of object
          },
          resolve (source, args, context, info) {
            ...
          }
        }
      }
    }
  },
  schemas: {
    ...
  }
}`,
        customFields: `{
  types:{
    FooQuery: {
      fields: {
        listFoo: {
          type: '[Foo]!',
          args: {
            id: 'ID' // value can be supplied as string instead of object
          },
          resolve (source, args, context, info) {
            ...
          },
          _extendedData: {
            ...
          }
        }
      }
    }
  },
  schemas: {
    ...
  }
}`,
        interMix: `{
  types: {
    Foo: {
      name: 'Foo',
      fields: {
        id: new GraphQLNonNull(GraphQLID)
      }
    }
  }
}`
      }
    }
  }
</script>