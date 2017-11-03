export default {
  title: 'Definitions',
  next: {
    title: 'Type Definitions',
    name: 'learn.typeDefinitions'
  },
  content: [
    {
      component: 'paragraph',
      html: 'Factory definitions are the basis for creating a GraphQL Factory ' +
      'library which contains type and schema objects along with helper methods. ' +
      'They contain extended graphql configuration objects with a few tweaks and ' +
      'shortcuts.'
    },
    {
      component: 'paragraph',
      html: '<h5># Structure</h5>'
    },
    {
      component: 'paragraph',
      html: 'A factory definition has types, schemas, functions, and context keys. ' +
      'Types and schemas are required and the rest are optional. Each value is ' +
      'itself an object.'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
  types: {},
  schemas: {},
  functions: {},
  context: {}
}`
    },
    {
      component: 'paragraph',
      html: '<h5># Using Definitions</h5>'
    },
    {
      component: 'paragraph',
      html: 'Definitions are merged with plugins, native graphql types and schemas, ' +
      'functions, and schema language definitions using the all purpose ' +
      '```use()``` method.'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `factory
  .use(definition)
  .use(plugin)
  .use(() => { ... }, 'functionName')
  .use(new GraphQLSchema({ ... }), 'schemaName')
  .use(schemaLanguage, resolverMap, 'schemaName')
}`
    }
  ]
}
