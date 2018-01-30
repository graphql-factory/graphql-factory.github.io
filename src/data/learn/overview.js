export default {
  title: 'GraphQL Factory',
  next: {
    title: 'Getting Started',
    name: 'learn.gettingStarted'
  },
  content: [
    {
      component: 'callout',
      type: 'primary',
      html: 'These documents assume you are already familiar with graphql ' +
      'concepts. If you are not, it is recommended that you first review ' +
      'the <a href="http://graphql.org/learn/", target="_blank">learn</a> ' +
      'section on the <a href="http://graphql.org/", target="_blank">graphql ' +
      'project page</a>. This documentation was modeled after the ' +
      '<a href="http://graphql.org/learn" target="_blank">graphql.org learning documentation</a> ' +
      'to keep the learning experience similar'
    },
    {
      component: 'callout',
      type: 'warning',
      html: 'This documentation mainly applies to <b>graphql-factory@>=3.0.0</b>. ' +
      'For 2.1.0 and below see ' +
      '<a href="http://graphql-factory.readthedocs.io/en/latest/", target="_blank">v2 docs</a>'
    },
    {
      component: 'paragraph',
      html: 'GraphQL Factory is a toolkit for designing, extending, and building ```graphql```. ' +
      'This toolkit provides additional features and shortcuts to the base ```graphql-js``` library. ' +
      'Some of these features include custom full lifecycle directive middleware, plugin support, the ' +
      'ability to define schemas using plain JavaScript objects, decomposition of GraphQL types ' +
      'and schemas, schema merging, definition exporting, ```.graphql``` file import support, ' +
      'execution tracing, and more.'
    },
    {
      component: 'paragraph',
      html: 'The goal is to make developing graphql apis easier by utilizing community written ' +
      'directives and plugins. You could for example create or use a CRUD plugin for ```RethinkDB``` ' +
      'that provides most or all of the database interaction your project requires making your ' +
      'overall codebase very lean. '
    }
  ]
}
