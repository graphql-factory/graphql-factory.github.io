export default {
  title: 'Setup',
  next: {
    title: 'The Factory',
    name: 'learn.factory'
  },
  content: [
    {
      component: 'paragraph',
      html: 'GraphQL Factory is a JavaScript library published to ' +
      '<a href="https://www.npmjs.com", target="_blank">npm</a>' +
      '. To use it, you must have <b>nodejs</b> and <b>npm</b> ' +
      'installed on your development machine. You must also install ' +
      'a version of ```graphql>=0.9.0```.'
    },
    {
      component: 'paragraph',
      html: '<h5># Installation</h5>'
    },
    {
      component: 'paragraph',
      html: 'To add graphql-factory to your project, change you your ' +
      'projects root directory and type the following'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: 'npm install --save graphql graphql-factory'
    },
    {
      component: 'callout',
      type: 'info',
      html: 'You can also use <b>yarn</b> to install these packages if you prefer'
    },
    {
      component: 'paragraph',
      html: '<h5># Instantiation</h5>'
    },
    {
      component: 'paragraph',
      html: 'GraphQL Factory is itself a class. To create a new factory simply ' +
      'use <code>new GraphQLFactory()</code> as you would any other object/class.'
    },
    {
      component: 'callout',
      type: 'info',
      html: '<b>Note</b> that you must have ```graphql``` in your project ' +
      'dependencies. In previous versions of GraphQL Factory it was required that ' +
      'you import and pass the ```graphql``` library to GraphQL Factory ' +
      'during initialization. To simplify the API it is now imported by the source code'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `import GraphQLFactory from 'graphql-factory'
const factory = new GraphQLFactory()`
    },
    {
      component: 'paragraph',
      html: 'The factory has now been created and is ready to start using ' +
      'definitions, plugins, middleware, etc.'
    }
  ]
}
