export default {
  title: 'Setup',
  next: {
    title: 'Definitions',
    name: 'learn.definitions'
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
      html: 'GraphQL Factory is now a toolkit and requires no instantiation ' +
      'of the main library. You instead import the tools you want to use.'
    },
    {
      component: 'callout',
      type: 'info',
      html: 'This differs from ```v2.x``` and below where a ' +
      'factory instance is created and used to build schemas.'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `import { SchemaDefinition, SchemaBacking } from 'graphql-factory'`
    }
  ]
}
