export default {
  indent: item => {
    return item.depth === 2 ? '0px' : '1em'
  },
  recursiveClose: true,
  bullets: {
    open: '<i class="fa fa-caret-down fa-fw"></i>',
    closed: '<i class="fa fa-caret-right fa-fw"></i>',
    leaf: '<i class="fa fa-fw"></i>'
  },
  items: [
    {
      content: 'SchemaDefinition',
      route: { name: 'api.schemadefinition' },
      items: [
        {
          content: 'Constructor',
          items: [
            {
              content: 'SchemaDefinition()',
              route: { name: 'api.schemadefinition' }
            }
          ]
        },
        {
          content: 'Properties',
          items: [
            {
              content: 'definition',
              route: { name: 'api', hash: '#SchemaDefinition.definition' }
            },
            {
              content: 'context',
              route: { name: 'api', hash: '#SchemaDefinition.context' }
            },
            {
              content: 'functions',
              route: { name: 'api', hash: '#SchemaDefinition.functions' }
            },
            {
              content: 'directives',
              route: { name: 'api', hash: '#SchemaDefinition.directives' }
            },
            {
              content: 'types',
              route: { name: 'api', hash: '#SchemaDefinition.types' }
            },
            {
              content: 'schema',
              route: { name: 'api', hash: '#SchemaDefinition.schema' }
            },
            {
              content: 'version',
              route: { name: 'api', hash: '#SchemaDefinition.version' }
            }
          ]
        },
        {
          content: 'Events',
          items: [
            {
              content: 'error',
              route: { name: 'api', hash: '#SchemaDefinition.events.error' }
            },
            {
              content: 'warn',
              route: { name: 'api', hash: '#SchemaDefinition.events.warn' }
            },
            {
              content: 'info',
              route: { name: 'api', hash: '#SchemaDefinition.events.info' }
            },
            {
              content: 'execution',
              route: { name: 'api', hash: '#SchemaDefinition.events.execution' }
            }
          ]
        },
        {
          content: 'Methods',
          items: [
            {
              content: 'buildSchema()'
            },
            {
              content: 'export()'
            },
            {
              content: 'merge()'
            },
            {
              content: 'omit()'
            },
            {
              content: 'pick()'
            },
            {
              content: 'use()'
            },
            {
              content: 'validate()'
            }
          ]
        }
      ]
    },
    {
      content: 'SchemaBacking',
      items: [
        {
          content: 'Constructor',
          items: [
            {
              content: 'SchemaBacking()'
            }
          ]
        },
        {
          content: 'Properties',
          items: []
        },
        {
          content: 'Methods',
          items: [
            {
              content: 'Directive()'
            },
            {
              content: 'Interface()'
            },
            {
              content: 'Object()'
            },
            {
              content: 'Scalar()'
            },
            {
              content: 'Union()'
            },
            {
              content: 'export()'
            },
            {
              content: 'import()'
            },
            {
              content: 'merge()'
            },
            {
              content: 'resolve()'
            },
            {
              content: 'subscribe()'
            },
            {
              content: 'validate()'
            }
          ]
        }
      ]
    }
  ]
}
