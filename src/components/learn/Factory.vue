<template lang="pug">
  .container-fluid
    .text-left
      h3 The Factory
      p
        | The factory is used to build definitions and create <code>graphql</code> APIs. It has a few methods
        | and extends the <code>EventEmitter</code> class which allows emitting and listening for events. All of
        | the definition building methods are chainable.
      callout(type="info")
        | The factory emits default events for things like requests which contain a detailed execution of a
        | resolve and middleware which can be used to create metrics and reports about your API. Refer to the
        | Docs section for a detailed list of events
      h5 # The <code>use()</code> Method
      p
        | This method is how everything is imported into the current factory definition. It is an all-purpose method
        | that accepts definitions, plugins, schemas, types, functions, and type language to produce a single
        | definition that can also be merge into a single schema.
      prism.prism-custom(language="javascript", :code="use")
      p
      h5 # Events
      p
        | Since the factory extends the EventEmitter class, you can chain the <code>on()</code> method to listen
        | for events and the <code>emit()</code> method to send them. This can be useful for things like tracking
        | requests for use in analysis or sending subscription data
      prism.prism-custom(language="javascript", :code="event")
      p
      h5 # Middleware
      p
        | There is a whole section in learn on middleware but at a high level there are three types of middleware;
        | before, after, and error. If a before middleware runs before the resolve function and after runs after.
        | If before, resolve, or after encounter an error the error middleware is called.
      p
        | Each middleware type can have multiple middleware handlers or none at all. Each middleware has a settable
        | timeout and uses an <code>express.js</code> style <code>req</code>, <code>res</code>, <code>next</code> API
      prism.prism-custom(language="javascript", :code="middleware")
    router-link.next-section.pull-left.text-left(:to="{ name: 'learn.definitions' }")
      span Continue Reading →
      h4 Definitions
</template>

<script type="text/babel">
  import Prism from 'vue-prismjs'
  import Callout from '@/components/Callout'
  export default {
    components: {
      Callout,
      Prism
    },
    data () {
      return {
        use: `factory
  .use(definition)
  .use(plugin)
  .use(() => { ... }, 'functionName')
  .use(new GraphQLSchema({ ... }), 'schemaName')
  .use(schemaLanguage, resolverMap, 'schemaName')
}`,
        event: `factory
  .on('request', data => {
    processData(data)
  })
  .on('error', err => {
    logError(err)
  })`,
        middleware: `factory
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
    }
  }
</script>