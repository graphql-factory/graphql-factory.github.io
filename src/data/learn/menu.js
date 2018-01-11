export default {
  indent: item => {
    return Array.isArray(item.config.items) ? '1em' : '0px'
  },
  recursiveClose: true,
  dynamicUpdates: false,
  bullets: {
    open: '<i class="fa fa-caret-down fa-fw"></i>',
    closed: '<i class="fa fa-caret-right fa-fw"></i>',
    leaf: '&nbsp;'
  },
  items: [
    {
      content: 'Introduction',
      items: [
        {
          content: 'Setup'
        }
      ]
    },
    {
      content: 'Definition',
      items: [
        {
          content: 'SchemaDefinition'
        },
        {
          content: 'Type Definitions'
        },
        {
          content: 'Schema Definition'
        },
        {
          content: 'Functions'
        }
      ]
    },
    {
      content: 'Backing',
      items: [
        {
          content: 'SchemaBacking'
        }
      ]
    },
    {
      content: 'Directives',
      items: [
        {
          content: 'Middleware'
        }
      ]
    },
    {
      content: 'Plugins',
      items: [
        {
          content: 'Authoring'
        }
      ]
    }
  ]
}
