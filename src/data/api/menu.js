export default {
  indent: item => {
    return item.depth === 2 ? '0px' : '1em'
  },
  recursiveClose: true,
  dynamicUpdates: false,
  bullets: {
    open: '<i class="fa fa-caret-down fa-fw"></i>',
    closed: '<i class="fa fa-caret-right fa-fw"></i>',
    leaf: '<i class="fa fa-fw"></i>'
  },
  items: [
    {
      content: 'SchemaDefinition',
      items: [
        {
          content: 'Constructor',
          items: [
            {
              content: 'SchemaDefinition()',
              route: { name: 'api', hash: '#SchemaDefinition' }
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
              content: 'context'
            },
            {
              content: 'functions'
            },
            {
              content: 'directives'
            },
            {
              content: 'types'
            },
            {
              content: 'schema'
            },
            {
              content: 'version'
            }
          ]
        },
        {
          content: 'Events',
          items: [
            {
              content: 'error'
            },
            {
              content: 'warn'
            },
            {
              content: 'info'
            },
            {
              content: 'execution'
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
