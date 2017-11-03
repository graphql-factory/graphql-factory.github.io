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
      'configurations except that since types are generated at the same time, ' +
      'we need to add a little bit of extra information and reference other ' +
      'types using the schema definition format for types.'
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
      name: 'Foo',
      fields: {
        ...
      }
    }
  },
  schemas: {
    ...
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
        '```Object``` (default, can be omitted)',
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
      'actual type object. In GraphQL Factory you instead use a type ' +
      'language type string like ```"ID!"```.'
    },
    {
      component: 'paragraph',
      html: 'Additionally when specifying a field/arg configuration that ' +
      'contains a type, you can simply put the type string instead of ' +
      'an object with a type key containing the type string.'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
  types:{
    Foo: {
      name: 'Foo',
      fields: {
        id: { type: 'ID!' }
      }
    },
    FooQuery: {
      // type can be omitted and 'Object' will be used
      // name can be omitted and key will be used
      fields: {
        listFoo: {
          type: '[Foo]!',
          args: {
            id: 'ID' // value can be supplied as string instead of object
          },
          resolve (source, args, context, info) {
            ...
          }
        }
      }
    }
  },
  schemas: {
    ...
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
      html: '<h5># Inter-mixing graphql</h5>'
    },
    {
      component: 'paragraph',
      html: 'Every object that is "used" in a definition goes through an expand ' +
      'process that checks the structure, fills in missing information, and decomposes ' +
      'graphql types/schemas into factory definitions. This allows for inter-mixing of ' +
      'graphql objects with factory definitions making the following a completely valid ' +
      'definition'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
  types: {
    Foo: {
      name: 'Foo',
      fields: {
        id: new GraphQLNonNull(GraphQLID)
      }
    }
  }
}`
    },
    {
      component: 'paragraph',
      html: '<h5># Custom Fields</h5>'
    },
    {
      component: 'paragraph',
      html: 'Custom fields can be added by adding non-reserved keys to the type ' +
      'definition. As a best practice, custom fields should be prefixed with an ' +
      'underscore. Custom fields can be useful to middleware and resolver functions ' +
      'to add data that can help the middleware/resolver make a decision on how data ' +
      'should be processed or requested.'
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
            ...
          },
          _extendedData: {
            ...
          }
        }
      }
    }
  },
  schemas: {
    ...
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
