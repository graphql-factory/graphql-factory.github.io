export default {
  title: 'Type Language',
  next: {
    title: 'Middleware',
    name: 'learn.middleware'
  },
  content: [
    {
      component: 'paragraph',
      html: 'GraphQL Factory supports "using" ' +
      '<a href="http://graphql.org/learn/schema/#type-language" ' +
      'target="_blank">graphql type language</a> ' +
      'to define your types and schemas. Type language does not however ' +
      'allow you to define per field resolvers or custom data.'
    },
    {
      component: 'paragraph',
      html: 'To accomplish this, the ```use()``` method is able to parse the ' +
      'definition using ```graphql.parse()``` and reconstruct a definition using ' +
      'an extension object as the second argument'
    },
    {
      component: 'callout',
      type: 'info',
      html: 'When defining a schema with the type language, only one schema can ' +
      'be defined and a schema name is required as the third argument to the ' +
      '```use()``` method'
    },
    {
      component: 'paragraph',
      html: 'The extension argument is an object that is merged into the parsed definition. It is structured as'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
  [TypeName]: { // merged into fields prop of type
    [FieldName]: {
      resolve (source, args, context, info) {
        ...
      },
      ...customFields
    }
  }
}`
    },
    {
      component: 'paragraph',
      html: 'So using the type definiton'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `const typeDef = \`
  type Foo {
    id: ID!
  }
  type FooQuery {
    listFoo: [Foo]!
  }
  schema {
    query: FooQuery
  }\``
    },
    {
      component: 'paragraph',
      html: 'With extension object'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `const extension = {
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
}`
    },
    {
      component: 'paragraph',
      html: 'By calling'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: 'factory.use(typeDef, extension, \'FooSchema\')'
    },
    {
      component: 'paragraph',
      html: 'Creates factory definition'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
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
  ]
}
