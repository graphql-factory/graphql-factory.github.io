export default {
  title: 'Type Definitions',
  next: {
    title: 'Schema Definitions',
    name: 'learn.schemaDefinitions'
  },
  content: [
    {
      component: 'paragraph',
      html: 'Type definitions are almost identical to native graphql type ' +
      'configurations except that since types are not explicitly instantiated ' +
      'a ```type``` field is required in order to correctly build the type. ' +
      'Additionally since types are stored in a ```key:definition``` hash, the ' +
      '```name``` field is not required on the definition.'
    },
    {
      component: 'paragraph',
      html: 'Types are always placed in the factory definition ```types``` ' +
      'key and are keyed on the type name.'
    },
    {
      component: 'paragraph',
      html: '<h5># Object Type Field</h5>'
    },
    {
      component: 'paragraph',
      html: 'In order to distinguish what GraphQL type a type definition should ' +
      'create, simply add a type key to the root of the type definition with the ' +
      'object type short name.'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
  types:{
    Foo: {
      type: 'Object',
      fields: {
        // field definitions
      }
    }
  },
  schema: {
    // schema definition
  }
}`
    },
    {
      component: 'paragraph',
      html: 'Acceptable object type short name values are'
    },
    {
      component: 'list',
      ordered: false,
      items: [
        '```Object```',
        '```Enum```',
        '```Scalar```',
        '```Input```',
        '```Interface```',
        '```Union```'
      ]
    },
    {
      component: 'paragraph',
      html: '<h5># Field & Argument Types</h5>'
    },
    {
      component: 'paragraph',
      html: 'Field and argument configurations both contain ' +
      'a type key. In graphql you would place a reference to an ' +
      'actual type object. In GraphQL Factory you instead use the ' +
      '```Schema&nbsp;Language``` representation (i.e. ```"ID!"```).'
    },
    {
      component: 'paragraph',
      html: 'Additionally when specifying a field/arg configuration that ' +
      'only contains type configuration, you can simply put the type ' +
      'representation instead of a full field/arg definition.'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
  types:{
    Foo: {
      fields: {
        id: { type: 'ID!' }
      }
    },
    FooQuery: {
      type: 'Object',
      fields: {
        listFoo: {
          type: '[Foo]!',
          args: {
            id: 'ID' // value can be supplied as string instead of object
          },
          resolve (source, args, context, info) {
            // resolve code
          }
        }
      }
    }
  },
  schema: {
    // schema definition
  }
}`
    },
    {
      component: 'paragraph',
      html: 'Some type string examples are'
    },
    {
      component: 'list',
      ordered: false,
      items: [
        '```"String"``` - A ```String``` type',
        '```"String!"``` - A non-null ```String``` type',
        '```"[Foo]"``` - A list of ```Foo``` type',
        '```"[Foo]!"``` - A non-null list of ```Foo``` type',
        '```"[Bar!]"``` - A list of non-null ```Bar``` type',
        '```"[Bar!]!"``` - A non-null list of non-null ```Bar``` type'
      ]
    },
    {
      component: 'paragraph',
      html: '<h5># Directives</h5>'
    },
    {
      component: 'paragraph',
      html: 'In order to modify the execution or provide additional ' +
      'metadata to a request, graphql provides directives. In GraphQL ' +
      'Factory, directives are pulled from the ```AST``` and injected ' +
      'into the field resolve info in a summarized format. Directives ' +
      'are applied at various locations using the ```@directives``` key '
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
  types:{
    FooQuery: {
      fields: {
        listFoo: {
          type: '[Foo]!',
          args: {
            id: 'ID' // value can be supplied as string instead of object
          },
          resolve (source, args, context, info) {
            const metadata = info
              .directives
              .FIELD_DEFINITION
              .metadata
              .value;
            // metadata = 'I am metadata'
          },
          '@directives': {
            metadata: {
              value: 'I am metadata'
            }
          },
        }
      }
    }
  },
  schema: {
    // schema definition
  }
}`
    },
    {
      component: 'paragraph',
      html: '<h5># Type Extension</h5>'
    },
    {
      component: 'paragraph',
      html: 'This feature is still in the design phase and cannot be documented ' +
      'at this time but will be included in the 3.0.0 release'
    }
  ]
}
