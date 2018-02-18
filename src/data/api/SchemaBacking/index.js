export default {
  anchor: 'api.schemabacking',
  heading: 'SchemaBacking',
  description: 'Constructs a schema backing which is an object that can be ' +
  'used to hydrate a schema built with the native graphql <code>buildSchema</code> ' +
  'utility. The SchemaBacking api allows all methods to be chained together while ' +
  'iteratively building a complete backing.',
  constructor: {
    signature: 'new SchemaBacking(backing)',
    example: {
      language: 'javascript',
      code: `import { SchemaBacking } from 'graphql-factory';
const backing = new SchemaBacking();`
    },
    params: [
      {
        name: 'backing',
        optional: true,
        type: 'SchemaBacking|object',
        description: 'A SchemaBacking instance or plain object to import and validate'
      }
    ]
  },
  properties: [
    {
      name: 'types',
      description: 'A getter property that returns a map of type backings. This excludes ENUM backings.'
    },
    {
      name: 'directives',
      description: 'A getter property that returns a map of directive backings. In GraphQL Factory, directives ' +
      'are extended to allow resolver functions.'
    },
    {
      name: 'enums',
      description: 'A getter property that returns a map of ENUM backings. This allows ENUM values to have ' +
      'values other than the value name.'
    },
    {
      name: 'backing',
      description: 'A getter property that returns an object containing the types, directives, and enums.'
    },
    {
      name: 'version',
      description: 'The version of SchemaBacking specification used.'
    }
  ],
  methods: [
    {
      name: 'Directive',
      description: 'Creates a new <code>DirectiveBacking</code> that can be used to build a complete directive backing.',
      signature: 'Directive(name) → DirectiveBacking;',
      params: [
        {
          name: 'name',
          optional: false,
          type: 'string',
          description: 'The name of the directive to build a backing for.'
        }
      ],
      examples: [
        {
          language: 'javascript',
          code: `const backing = new SchemaBacking()
  .Directive('test')
  .resolve((source, args, context, info) => {
    // directive resolver code
  })
  .backing;`
        }
      ]
    },
    {
      name: 'Interface',
      description: 'Creates a new <code>InterfaceBacking</code> that can be used to build a complete interface backing.',
      signature: 'Interface(name) → InterfaceBacking;',
      params: [
        {
          name: 'name',
          optional: false,
          type: 'string',
          description: 'The name of the interface to build a backing for.'
        }
      ],
      examples: [
        {
          language: 'javascript',
          code: `const backing = new SchemaBacking()
  .Interface('Animal')
  .resolveType((value, info) => {
    // resolve type code
  })
  .backing;`
        }
      ]
    },
    {
      name: 'Object',
      description: 'Creates a new <code>ObjectBacking</code> that can be used to build a complete object backing.',
      signature: 'Object(name) → ObjectBacking;',
      params: [
        {
          name: 'name',
          optional: false,
          type: 'string',
          description: 'The name of the object to build a backing for.'
        }
      ],
      examples: [
        {
          language: 'javascript',
          code: `const backing = new SchemaBacking()
  .Object('Foo')
  .isTypeOf((value, info) => {
    // is type of code
  })
  .resolve('listFoo', (source, args, context, info) => {
    // resolve code
  })
  .subscribe('subscribeFoo', (source, args, context, info) => {
    // subscribe code
  })
  .backing;`
        }
      ]
    },
    {
      name: 'Scalar',
      description: 'Creates a new <code>ScalarBacking</code> that can be used to build a complete scalar backing.',
      signature: 'Scalar(name) → ScalarBacking;',
      params: [
        {
          name: 'name',
          optional: false,
          type: 'string',
          description: 'The name of the scalar to build a backing for.'
        }
      ],
      examples: [
        {
          language: 'javascript',
          code: `const backing = new SchemaBacking()
  .Scalar('DateTime')
  .serialize(value => {
    // serialize code
  })
  .parseValue(value => {
    // parse value code
  })
  .parseLiteral(valueAST => {
    // parse literal code
  })
  .backing;`
        }
      ]
    },
    {
      name: 'Union',
      description: 'Creates a new <code>UnionBacking</code> that can be used to build a complete union backing.',
      signature: 'Union(name) → UnionBacking;',
      params: [
        {
          name: 'name',
          optional: false,
          type: 'string',
          description: 'The name of the union to build a backing for.'
        }
      ],
      examples: [
        {
          language: 'javascript',
          code: `const backing = new SchemaBacking()
  .Union('Characters')
  .resolveType((value, info) => {
    // resolve type code
  })
  .backing;`
        }
      ]
    },
    {
      name: 'Enum',
      description: 'Creates a new <code>EnumBacking</code> that can be used to build a complete ENUM backing.',
      signature: 'Enum(name) → EnumBacking;',
      params: [
        {
          name: 'name',
          optional: false,
          type: 'string',
          description: 'The name of the enum to build a backing for.'
        }
      ],
      examples: [
        {
          language: 'javascript',
          code: `const backing = new SchemaBacking()
  .Enum('Pet')
  .value('DOG', 1)
  .value('CAT', 2)
  .value('FISH', 3)
  .backing;`
        }
      ]
    },
    {
      name: 'export',
      description: 'Exports the backing in a specific format. For example a resolver map that can be used' +
      'with other client tools',
      signature: 'export(format) → *',
      params: [
        {
          name: 'format',
          optional: false,
          type: 'string',
          description: 'The name of the format to export (i.e. resolverMap)'
        }
      ],
      examples: [
        {
          language: 'javascript',
          code: `const resolverMap = new SchemaBacking()
  .Object('Foo')
  .resolve('listFoo', (source, args, context, info) => {
    // resolver code
  })
  .export('resolverMap')`
        }
      ]
    },
    {
      name: 'import',
      description: 'Imports a SchemaBacking from a SchemaDefinition',
      signature: 'import(schemaDefinition) → SchemaBacking',
      params: [
        {
          name: 'schemaDefinition',
          optional: false,
          type: 'SchemaDefinition',
          description: 'A SchemaDefinition to extract the backing from'
        }
      ],
      examples: [
        {
          language: 'javascript',
          code: `const backing = new SchemaBacking()
  .import(definition);`
        }
      ]
    },
    {
      name: 'merge',
      description: 'Merges one or more SchemaBackings into the current',
      signature: 'merge(backing[,backing2][,...backingN]) → SchemaBacking',
      params: [
        {
          name: 'backing',
          optional: false,
          type: 'SchemaBacking',
          description: 'A SchemaBacking to merge'
        }
      ],
      examples: [
        {
          language: 'javascript',
          code: `const backing = new SchemaBacking()
  .merge(backing1)
  .merge(backing2, backing3);`
        }
      ]
    },
    {
      name: 'resolve',
      description: 'Shortcut method for defining a resolver on a type and field',
      signature: 'resolve(typeName, fieldName, resolver) → SchemaBacking',
      params: [
        {
          name: 'typeName',
          optional: false,
          type: 'string',
          description: 'The type name'
        },
        {
          name: 'fieldName',
          optional: false,
          type: 'string',
          description: 'The field name'
        },
        {
          name: 'resolver',
          optional: false,
          type: 'function',
          description: 'The field resolve function'
        }
      ],
      examples: [
        {
          language: 'javascript',
          code: `const backing = new SchemaBacking()
  .resolve('Query', 'listFoo', (source, args, context, info) => {
    // resolver code
  })
  .resolve('Query', 'listBar', (source, args, context, info) => {
    // resolver code
  })`
        }
      ]
    },
    {
      name: 'subscribe',
      description: 'Shortcut method for defining a subscriber on a type and field',
      signature: 'subscribe(typeName, fieldName, subscriber) → SchemaBacking',
      params: [
        {
          name: 'typeName',
          optional: false,
          type: 'string',
          description: 'The type name'
        },
        {
          name: 'fieldName',
          optional: false,
          type: 'string',
          description: 'The field name'
        },
        {
          name: 'subscriber',
          optional: false,
          type: 'function',
          description: 'The subscribe function'
        }
      ],
      examples: [
        {
          language: 'javascript',
          code: `const backing = new SchemaBacking()
  .subscribe('Query', 'subscribeFoo', (source, args, context, info) => {
    // subscribe code
  })
  .subscribe('Query', 'subscribeBar', (source, args, context, info) => {
    // subscribe code
  })`
        }
      ]
    },
    {
      name: 'validate',
      description: 'Validates a passed backing or the current backing if no arguments',
      signature: 'validate([backing]) → SchemaBacking',
      params: [
        {
          name: 'backing',
          optional: true,
          type: 'SchemaBacking|SchemaBackingConfig',
          description: 'A schema backing-like object to validate'
        }
      ],
      examples: [
        {
          language: 'javascript',
          code: `const backing = new SchemaBacking(config)
  .validate();`
        },
        {
          language: 'javascript',
          code: `const backing = new SchemaBacking()
  .validate(backing1);`
        }
      ]
    }
  ]
}
