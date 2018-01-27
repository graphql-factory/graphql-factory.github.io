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
  methods: [
    {
      name: 'buildSchema',
      description: 'Builds a GraphQLSchema from the SchemaDefinition, and extends it with a request method and the schema itself',
      signature: 'buildSchema([options]) → Promise&lt;GraphQLSchema&gt;',
      params: [
        {
          name: 'options',
          children: [
            {
              name: 'useMiddleware',
              optional: true,
              defaultValue: true,
              type: 'boolean',
              description: 'When <code>false</code>, field resolve functions will ' +
              'not be wrapped with middleware. This will remove ' +
              'directive and instrumentation support'
            },
            {
              name: 'factoryExecution',
              optional: true,
              defaultValue: true,
              type: 'boolean',
              description: 'When <code>true</code>, uses a custom GraphQL Factory ' +
              'execution which allows directive middleware support. Requires ' +
              '<code>useMiddleware</code> to also be true'
            }
          ]
        }
      ],
      examples: [
        {
          language: 'javascript',
          code: `const schema = await new SchemaDefinition()
  .use(definition)
  .buildSchema();`
        }
      ]
    },
    {
      name: 'export',
      description: 'Exports the <code>SchemaDefinition</code> as an object ' +
      'containing the Schema Language Definition and a <code>SchemaBacking</code>',
      signature: 'export() → Promise&lt;Object&gt;',
      examples: [
        {
          language: 'javascript',
          code: `const { definition, backing } = await new SchemaDefinition()
  .use(definition)
  .export();`
        }
      ]
    },
    {
      name: 'merge',
      description: 'Merges a <code>SchemaDefinition</code> or definition-like object' +
      'into the current <code>SchemaDefinition</code>',
      signature: 'merge(definition) → SchemaDefinition',
      params: [
        {
          name: 'definition',
          optional: false,
          type: 'SchemaDefinition|Object',
          description: 'SchemaDefinition or definition-like object to merge'
        }
      ],
      examples: [
        {
          language: 'javascript',
          code: `import FooDefinition from './fooDefinition';
const definition = new SchemaDefinition()
  .merge(fooDefinition);`
        }
      ]
    },
    {
      name: 'omit',
      description: 'Omits one or more paths from a definition store. ' +
      'Mutates the <code>SchemaDefinition</code>. This method can be useful ' +
      'when multiple definitions or plugins have been used in the definition ' +
      'to eliminate unwanted types, context, functions, etc.',
      signature: 'omit(store, path1[, path2, ...]) → SchemaDefinition',
      params: [
        {
          name: 'store',
          optional: false,
          type: 'string',
          description: 'Store name to omit fields from'
        },
        {
          name: 'path',
          optional: false,
          type: 'string|Array&lt;string&gt;',
          description: 'lodash formatted string or array paths to omit from the store'
        }
      ],
      examples: [
        {
          language: 'javascript',
          code: `import fooDefinition from './fooDefinition';
const definition = new SchemaDefinition()
  .use(fooDefinition)
  .omit('types', 'Foo', 'Bar')`
        }
      ]
    },
    {
      name: 'pick',
      description: 'Picks one or more paths from a definition store and removes the rest. ' +
      'Mutates the <code>SchemaDefinition</code>. This method can be useful when merging ' +
      'an existing definition where only some parts of the definition are wanted',
      signature: 'pick(store, path1[, path2, ...]) → SchemaDefinition',
      params: [
        {
          name: 'store',
          optional: false,
          type: 'string',
          description: 'Store name to pick fields from'
        },
        {
          name: 'path',
          optional: false,
          type: 'string|Array&lt;string&gt;',
          description: 'lodash formatted string or array paths to pick from the store'
        }
      ],
      examples: [
        {
          language: 'javascript',
          code: `import fooDefinition from './fooDefinition';
const definition = new SchemaDefinition()
  .use(fooDefinition)
  .pick('types', 'Foo', 'Bar', 'Query', 'Mutation')`
        }
      ]
    },
    {
      name: 'use',
      description: 'Adds full or partial definitions to the current <code>SchemaDefinition</code>',
      signature: `use(SchemaDefinition) → SchemaDefinition<br>
use(SchemaBacking) → SchemaDefinition<br>
use(GraphQLSchema[, namePrefix]) → SchemaDefinition<br>
use(GraphQLDirective[, name]) → SchemaDefinition<br>
use(GraphQLNamedType[, name]) → SchemaDefinition<br>
use(GraphQLFactoryPlugin) → SchemaDefinition<br>
use(graphqlFilePath) → SchemaDefinition<br>
use(schemaLanguage[, SchemaBacking][, namePrefix]) → SchemaDefinition<br>
use(Function, name) → SchemaDefinition<br>
use(definitionLikeObject) → SchemaDefinition<br>
use() → SchemaDefinition
`,
      examples: [
        {
          language: 'javascript',
          code: `import fooDefinition from './fooDefinition';
const definition = new SchemaDefinition()
  .use(fooDefinition)`
        }
      ]
    },
    {
      name: 'validate',
      description: 'Validates the <code>SchemaDefinition</code> ' +
      'structure throwing an Error if invalid',
      signature: 'validate() → Promise&lt;Object&gt;',
      examples: [
        {
          language: 'javascript',
          code: `import fooDefinition from './fooDefinition';
const definition = await new SchemaDefinition()
  .use(fooDefinition)
  .validate();`
        }
      ]
    }
  ]
}
