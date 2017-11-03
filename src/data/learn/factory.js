export default {
  title: 'The Factory',
  next: {
    title: 'Definitions',
    name: 'learn.definitions'
  },
  content: [
    {
      component: 'paragraph',
      html: 'The factory is used to build definitions and create ' +
      '```graphql``` APIs. It has a few methods and extends the ' +
      '```EventEmitter``` class which allows emitting and listening ' +
      'for events. All of the definition building methods are chain-able.'
    },
    {
      component: 'callout',
      type: 'info',
      html: 'The factory emits default events for things like requests which ' +
      'contain a detailed execution of a resolve and middleware which can be used ' +
      'to create metrics and reports about your API. Refer to the Docs section ' +
      'for a detailed list of events'
    },
    {
      component: 'paragraph',
      html: '<h5># The ```use()``` Method</h5>'
    },
    {
      component: 'paragraph',
      html: 'This method is how everything is imported into the current factory ' +
      'definition. It is an all-purpose method that accepts definitions, plugins, ' +
      'schemas, types, functions, and type language to produce a single definition ' +
      'that can also be merge into a single schema.'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `factory
  .use(definition)
  .use(plugin)
  .use(() => { ... }, 'functionName')
  .use(new GraphQLSchema({ ... }), 'schemaName')
  .use(schemaLanguage, resolverMap, 'schemaName')
}`
    },
    {
      component: 'paragraph',
      html: '<h5># Events</h5>'
    },
    {
      component: 'paragraph',
      html: 'Since the factory extends the EventEmitter class, you can chain ' +
      'the ```on()``` method to listen for events and the ```emit()``` ' +
      'method to send them. This can be useful for things like tracking requests for ' +
      'use in analysis or sending subscription data'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `factory
  .on('request', data => {
    processData(data)
  })
  .on('error', err => {
    logError(err)
  })`
    },
    {
      component: 'paragraph',
      html: '<h5># Middleware</h5>'
    },
    {
      component: 'paragraph',
      html: 'There is a whole section in learn on middleware but at a high level there are ' +
      'three types of middleware; before, after, and error. If a before middleware runs before ' +
      'the resolve function and after runs after. If before, resolve, or after encounter an ' +
      'error the error middleware is called.'
    },
    {
      component: 'paragraph',
      html: 'Each middleware type can have multiple middleware handlers or none at all. ' +
      'Each middleware has a settable timeout and uses an ```express.js``` ' +
      'style ```req```, ```res```, ```next``` API'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `factory
  .use(definition)
  .before((req, res, next) => {
    const { args } = req
    args.password = base64Encode(args.password)
    req.startedAt = Date.now()
    return next()
  })
  .after((req, res, next) => {
    const { result } = req
    return result
      ? next()
      : next(new Error('no result'))
  })
  .after((req, res, next) => {
    const { result, startedAt } = req
    result.duration = Date.now() - startedAt
  })
  .error((req, res, next) => {
    const { error } = req
    if (error.message === 'no result') {
      logError('no result error', error)
    }
    next()
  })`
    }
  ]
}
