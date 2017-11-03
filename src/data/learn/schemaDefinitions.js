export default {
  title: 'Schema Definitions',
  next: {
    title: 'Functions',
    name: 'learn.functions'
  },
  content: [
    {
      component: 'paragraph',
      html: 'Schemas are the heart of graphql. Defining them in ' +
      'GraphQL Factory is simple. You have two choices'
    },
    {
      component: 'paragraph',
      html: '1. Define ```query``` / ```mutation``` / ```subscription``` ' +
      'object(s) in types and reference them in the schema definition'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
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
}`
    },
    {
      component: 'paragraph',
      html: '1. Define ```query``` / ```mutation``` / ```subscription``` ' +
      'object(s) directly in the schema definition'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
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
    },
    {
      component: 'paragraph',
      html: 'Only the ```query``` operation is required and subscriptions are supported.'
    }
  ]
}
