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
              route: { name: 'api.schemadefinition', hash: '#definition' }
            },
            {
              content: 'context',
              route: { name: 'api.schemadefinition', hash: '#context' }
            },
            {
              content: 'functions',
              route: { name: 'api.schemadefinition', hash: '#functions' }
            },
            {
              content: 'directives',
              route: { name: 'api.schemadefinition', hash: '#directives' }
            },
            {
              content: 'types',
              route: { name: 'api.schemadefinition', hash: '#types' }
            },
            {
              content: 'schema',
              route: { name: 'api.schemadefinition', hash: '#schema' }
            },
            {
              content: 'version',
              route: { name: 'api.schemadefinition', hash: '#version' }
            }
          ]
        },
        {
          content: 'Events',
          items: [
            {
              content: 'error',
              route: { name: 'api.schemadefinition', hash: '#event.error' }
            },
            {
              content: 'warn',
              route: { name: 'api.schemadefinition', hash: '#event.warn' }
            },
            {
              content: 'info',
              route: { name: 'api.schemadefinition', hash: '#event.info' }
            },
            {
              content: 'execution',
              route: { name: 'api.schemadefinition', hash: '#event.execution' }
            }
          ]
        },
        {
          content: 'Methods',
          items: [
            {
              content: 'buildSchema()',
              route: { name: 'api.schemadefinition', hash: '#buildSchema' }
            },
            {
              content: 'export()',
              route: { name: 'api.schemadefinition', hash: '#export' }
            },
            {
              content: 'merge()',
              route: { name: 'api.schemadefinition', hash: '#merge' }
            },
            {
              content: 'omit()',
              route: { name: 'api.schemadefinition', hash: '#omit' }
            },
            {
              content: 'pick()',
              route: { name: 'api.schemadefinition', hash: '#pick' }
            },
            {
              content: 'use()',
              route: { name: 'api.schemadefinition', hash: '#use' }
            },
            {
              content: 'validate()',
              route: { name: 'api.schemadefinition', hash: '#validate' }
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
