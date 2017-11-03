export default {
  title: 'Context',
  next: {
    title: 'Type Language',
    name: 'learn.typeLanguage'
  },
  content: [
    {
      component: 'callout',
      type: 'info',
      html: 'Note that <b>context</b> as it is known in <b>v3</b> was in <b>v2</b> ' +
      'bound to the function ```this``` context. This made arrow functions ' +
      'unsupported for passing context. In <b>v3</b> ```resolve``` functions ' +
      'are no longer bound to context and instead are passed a merged context value.'
    },
    {
      component: 'paragraph',
      html: 'A factory definition can contain a ```context``` property that ' +
      'will be merged and passed to each ```resolve``` function/middleware ' +
      'in the ```context``` argument. This makes passing things like database ' +
      'cursors and global data to resolvers simple making resolve code less repetitive.'
    },
    {
      component: 'paragraph',
      html: 'When "using" multiple definitions that specify context, each context is ' +
      'merged over the existing to create a single context object that is then merged ' +
      'with the context object in each request.'
    },
    {
      component: 'paragraph',
      html: 'Non-resolve functions still have the context bound to functions ' +
      '```this``` context, so arrow functions should not be used if ' +
      'context access is needed.'
    },
    {
      component: 'paragraph',
      html: 'A default context contains'
    },
    {
      component: 'list',
      ordered: false,
      items: [
        '```graphql``` the graphql library',
        '```lib``` the GraphQL Factory library instance'
      ]
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `import rdash from 'rethinkdbdash'

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
  ]
}
