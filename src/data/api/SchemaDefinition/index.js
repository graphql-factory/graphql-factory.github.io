export default {
  heading: 'SchemaDefinition',
  description: 'Constructs a schema definition in <a href="#">GraphQL Factory Definition Format</a>. ' +
  'Merges all inputs/imports into a single definition with customizable merge conflict resolution. ' +
  'Extends the standard <a href="https://nodejs.org/api/events.html#events_class_eventemitter"' +
  ' target="_blank">EventEmitter</a> class and emits events during build and execution.',
  constructor: {
    signature: 'new SchemaDefinition([options])',
    example: {
      language: 'javascript',
      code: `import { SchemaDefinition } from 'graphql-factory';
const definition = new SchemaDefinition();`
    },
    params: [
      {
        name: 'options',
        children: [
          {
            name: 'noDefaultTypes',
            optional: true,
            defaultValue: false,
            type: 'boolean',
            description: 'Prevents JSON and DateTime types from being automatically added to the definition'
          },
          {
            name: 'onConflict',
            optional: true,
            type: 'function',
            description: 'Sets a custom conflict resolution function for use in merge conflicts'
          }
        ]
      }
    ]
  },
  properties: [
    {
      name: 'definition',
      description: 'A getter property that returns a <code>Promise</code> that resolves ' +
      'all pending asynchronous code and returns the <code>SchemaDefinition</code> instance'
    },
    {
      name: 'context',
      description: 'A getter property that returns the current context object that will be passed to each operation'
    },
    {
      name: 'functions',
      description: 'A getter property that returns a map of functions that can be references by the <code>SchemaDefinition</code>'
    },
    {
      name: 'directives',
      description: 'A getter property that returns a map of directive definitions'
    },
    {
      name: 'types',
      description: 'A getter property that returns a map of type definitions'
    },
    {
      name: 'schema',
      description: 'A getter property that returns the schema definition'
    },
    {
      name: 'version',
      description: 'The version of <code>SchemaDefinition</code> structure'
    }
  ],
  events: [
    {
      name: 'error',
      dataType: 'Error',
      description: 'Error thrown during definition build'
    },
    {
      name: 'warn',
      dataType: 'Object',
      description: 'Warning data during definition build'
    },
    {
      name: 'info',
      dataType: 'Object',
      description: 'Informational data during definition build'
    },
    {
      name: 'execution',
      dataType: 'Object',
      description: 'Execution tracing data for a request'
    }
  ],
  content: [
    {
      component: 'heading',
      config: { type: 'h4', anchor: 'SchemaDefinition' },
      html: '<i>class</i> SchemaDefinition <code>extends</code> EventEmitter'
    },
    {
      component: 'paragraph',
      html: 'Constructs a schema definition in GraphQL Factory Definition ' +
      'Format. Merges all inputs/imports into a single definition with ' +
      'customizable merge conflict resolution. Extends the standard ' +
      'EventEmitter class and emits events during build and execution.'
    },
    {
      component: 'callout',
      type: 'warning',
      html: 'The ```SchemaDefinition``` class builds the definition ' +
      'asynchronously and should be resolved before attempting to ' +
      'access its properties. This can be done by resolving the ' +
      '```definition``` property, the ```buildSchema``` method, or ' +
      'the ```use``` method with no arguments.'
    },
    {
      component: 'heading',
      config: { type: 'h5', anchor: 'SchemaDefinition.constructor' },
      html: 'Constructor'
    },
    {
      component: 'callout',
      type: 'default',
      config: { class: [ 'mono' ] },
      html: 'new SchemaDefinition([options]) → SchemaDefinition'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `import { SchemaDefinition } from 'graphql-factory';
const definition = await new SchemaDefinition();`
    }
  ]
}
