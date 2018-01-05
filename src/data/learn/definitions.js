export default {
  title: 'Definitions',
  next: {
    title: 'Type Definitions',
    name: 'learn.typeDefinitions'
  },
  content: [
    {
      component: 'paragraph',
      html: 'Definitions are the basis for building schemas. GraphQL Factory provides ' +
      'the definition building class ```SchemaDefinition```. This class allows you to ' +
      'create and merge definitions in several formats. You can for example combine a ' +
      '```Factory&nbsp;Definition``` with a ```GraphQLSchema``` object and a ' +
      '```Schema&nbspLanguage``` definition to create a single schema.'
    },
    {
      component: 'paragraph',
      html: '<h5># Factory Definition Format</h5>'
    },
    {
      component: 'paragraph',
      html: 'A factory definition has types, directives, functions, context, and a schema. ' +
      'Types and schema are required to build a schema but the rest are optional. The ' +
      'specific structure of each field will be explained in depth in following sections.'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
  types: {},
  directives: {}
  functions: {},
  context: {},
  schema: {}
}`
    },
    {
      component: 'paragraph',
      html: '<h5># Building Definitions</h5>'
    },
    {
      component: 'paragraph',
      html: 'Building definitions is accomplished with the ```SchemaDefinition``` class. ' +
      'This class is able to interpret schema language, deconstruct schema objects, merge ' +
      'definitions, and more. Almost all pieces of a schema can be imported into the ' +
      'definition using the ```use``` method.'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `const definition = new SchemaDefinition()
  .use(factoryDefinition)
  .use(plugin)
  .use(() => { ... }, 'functionName')
  .use(new GraphQLSchema({ ... }))
  .use(schemaLanguage, schemaBacking)
}`
    }
  ]
}
