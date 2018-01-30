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
          content: 'Overview',
          route: { name: 'learn' }
        },
        {
          content: 'Getting Started',
          route: { name: 'learn.gettingStarted' }
        }
      ]
    },
    {
      content: 'Definition',
      items: [
        {
          content: 'GFD Format',
          route: { name: 'learn.gfdFormat' }
        },
        {
          content: 'SchemaDefinition',
          route: { name: 'learn.documenting' }
        },
        {
          content: 'Type Definitions',
          route: { name: 'learn.documenting' }
        },
        {
          content: 'Functions',
          route: { name: 'learn.documenting' }
        }
      ]
    },
    {
      content: 'Backing',
      items: [
        {
          content: 'SchemaBacking',
          route: { name: 'learn.documenting' }
        }
      ]
    },
    {
      content: 'Directives',
      items: [
        {
          content: 'Middleware',
          route: { name: 'learn.documenting' }
        }
      ]
    },
    {
      content: 'Plugins',
      items: [
        {
          content: 'Authoring',
          route: { name: 'learn.documenting' }
        }
      ]
    },
    {
      content: 'Execution',
      items: [
        {
          content: 'Custom Execution',
          route: { name: 'learn.documenting' }
        },
        {
          content: 'Context',
          route: { name: 'learn.documenting' }
        },
        {
          content: 'Extensions',
          route: { name: 'learn.documenting' }
        },
        {
          content: 'Tracing',
          route: { name: 'learn.documenting' }
        }
      ]
    }
  ]
}
