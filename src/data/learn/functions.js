export default {
  title: 'Functions',
  next: {
    title: 'Context',
    name: 'learn.context'
  },
  content: [
    {
      component: 'paragraph',
      html: 'Functions are just that, functions. In GraphQL Factory, you can register functions ' +
      'in the definition and reference them by their name. Functions can be used for field ' +
      '```resolve```, ```serialize```, ```parseValue```, ' +
      '```parseLiteral```, ```isTypeOf```, etc. You can register ' +
      'functions using a definition object'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
  functions: {
    resolveFoo (source, args, context, info) {
      ...
    },
    serializeBar (value) {
      ...
    }
  }
}`
    },
    {
      component: 'paragraph',
      html: 'or with the ```use()``` method with a function name'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `function resolveFoo (source, args, context, info) {
  ...
}

function serializeBar (value) {
  ...
}

factory
  .use(resolveFoo, 'resolveFoo')
  .use(serializeBar, 'serializeBar')`
    },
    {
      component: 'paragraph',
      html: 'and then reference by name'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
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
  ]
}
