<template lang="pug">
  .container-fluid
    .text-left
      h3 Type Language
      p
        | GraphQL Factory supports "using"&nbsp;
        a(href="http://graphql.org/learn/schema/#type-language", target="_blank") graphql type language
        | &nbsp;to define your types and schemas. Type language does not however allow you to define
        | per field resolvers or custom data.
      p
        | To accomplish this, the <code>use()</code> method is able
        | to parse the definition using <code>graphql.parse()</code> and recontruct a definition using an
        | extension object as the second argument
      callout(type="info")
        | When defining a schema with the type language, only one schema can be defined and a schema name is
        | required as the third argument to the <code>use()</code> method
      p
        | The extension argument is an object that is merged into the parsed definition. It is structured as
      prism.prism-custom(language="javascript", :code="langDef")
      p
        | So using the type definiton
      prism.prism-custom(language="javascript", :code="typeLang")
      p
        | With extension object
      prism.prism-custom(language="javascript", :code="typeExt")
      p
        | By calling
      prism.prism-custom(language="javascript", :code="buildType")
      p
        | Creates factory definition
      prism.prism-custom(language="javascript", :code="factoryDef")
    router-link.next-section.pull-left.text-left(:to="{ name: 'learn.middleware' }")
      span Continue Reading →
      h4 Middleware
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
        langDef: `{
  [TypeName]: { // merged into fields prop of type
    [FieldName]: {
      resolve (source, args, context, info) {
        ...
      },
      ...customFields
    }
  }
}`,
        typeLang: `const typeDef = \`
  type Foo {
    id: ID!
  }
  type FooQuery {
    listFoo: [Foo]!
  }
  schema {
    query: FooQuery
  }\``,
        typeExt: `const extension = {
  FooQuery: {
    listFoo: {
      resolve (source, args, context, info) {
        ...
      },
      _factory: {
        ...
      }
    }
  }
}`,
        buildType: 'factory.use(typeDef, extension, \'FooSchema\')',
        factoryDef: `{
  types: {
    Foo: {
      type: 'Object',
      name: 'Foo',
      fields: {
        id: { type: 'ID!' }
      }
    },
    FooQuery: {
      type: 'Object',
      name: 'FooQuery',
      fields: {
        listFoo: {
          type: '[Foo]!',
          resolve (source, args, context, info) {
            ...
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