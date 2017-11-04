export default {
  title: 'Libraries',
  next: {
    title: 'Building a Library',
    name: 'learn.buildLibrary'
  },
  content: [
    {
      component: 'paragraph',
      html: 'Libraries are generated using the ```library()``` method. When generated, all' +
      'types and schemas in the current definition are a made into native graphql objects ' +
      'and placed into a ```registry```. All middleware functions are also wrapped around ' +
      '```resolve``` functions.'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `const lib = factory
  .user(definition)
  .library()`
    },
    {
      component: 'paragraph',
      html: 'Libraries contain a ```registry``` and a ```request``` method that makes graphql ' +
      'requests on the schemas in the registry. If you don\'t want to use GraphQL Factories ' +
      '```request``` method and would instead prefer to use something like ' +
      '<a href="https://github.com/apollographql/apollo-server" target="_blank">Apollo Server</a> ' +
      'you can simply use one of the schemas from the registry.'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `const { definition, types, schemas } = lib.registry
lib.request({
  schema: 'FooSchema',
  requestString: \`
      query Query {
        listFoo {
          id
          name
        }
      }\`
})`
    },
    {
      component: 'paragraph',
      html: 'Libraries extend the ```EventEmitter``` and are available to ```resolve``` ' +
      'functions so events can be emitter from the resolve and listened for on the library ' +
      'instance.'
    },
    {
      component: 'paragraph',
      html: 'This means that from a resolve you can emit events from both the ```library``` ' +
      'instance and the ```factory``` instance which allows you to control which listeners ' +
      'receive events.'
    }
  ]
}
