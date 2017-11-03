<template lang="pug">
  .container-fluid
    .text-left
      h3 Middleware
      p
        | Middleware is made up of 1 or more functions that get executed at various points in a request's lifecycle.
        | In GraphQL Factory there are before, after, and error middleware types
      h5 # API
      p
        | All middleware types have the same API. They take use express.js <code>req</code>, <code>res</code>
        | and <code>next</code> arguments to control the flow of a request and potentially modify its data.
      prism.prism-custom(language="javascript", :code="middleware")
      p
      h5 ◘ req
      p
        | The <code>req</code> argument contains all the data about the request which includes the resolver arguments
        | <code>source</code>, <code>args</code>, <code>context</code>, and <code>info</code>.
      p
        | Each request will also add a <code>result</code> value after the resolve function is called
        | and an <code>error</code> value if an error is encountered. You can modifiy/add <code>error</code>
        | and <code>result</code> or add any other properties to the <code>req</code> object you would like
        | the next middleware(s) to have acccess to. Additionally a <code>reroutes</code> count is kept to keep
        | track of re-routes.
      prism.prism-custom(language="javascript", :code="req")
      p
      h5 ◘ res
      p
        | The <code>res</code> argument is an object that contains two methods <code>end</code> and <code>send</code>.
      ul
        li <b>end</b> - Takes an optional <code>data</code> argument and ends the request with a error if
        | data is an instance of Error or <code>request.error</code> has a value. Otherwise it will end with success
        | and the value of <code>data</code> or <code>req.result</code>
        li <b>send</b> - Takes a single <code>result</code> argument and sends that value ending the request
        | with success
      h5 ◘ next
      p
        | <code>next</code> is a function that either routes to the next middleware if called with no arguments,
        | routes to the error middleware if an instance of Error is passed, or routes to the resolve function if
        | <code>"resolve"</code> is passed.
      h5 # Before
      p
        | Before middleware runs before the resolve function. It can be useful for modifying arguments, capturing
        | request start times, authorizing a request before the resolver has run, etc. Each middleware will be run
        | in the order it was added.
      h5 # After
      p
        | After middleware runs after the resolve function. It can be usefule for sending information about the result
        | to external systems, validating the result, masking result fields, etc. Each middleware will be run in
        | in the order it was added.
      h5 # Error
      p
        | Error middleware is only run if the before middleware, after middleware, or resolve function encounter an
        | error. If an error middleware itself encounters an error or an error is called in the next method it will
        | immediately end the request.
      h5 # Re-routing
      p
        | Re-routing allows you to use the next method to route to a named route name. This allows a middleware to be
        | called multiple times. This may be useful if a request needs to retry some piece of code. By default the
        | the resolve function is named the reserved name <code>resolve</code>. Re-routing middleware requires you
        | to name your middleware with the name option during registration. If re-routing to a non-existant route
        | the request will error. If calling a non-existant route in error middleware, the request will end the
        | request with error.
      p
        | As a best practice, route names should be namespaced with their type and a unique name (i.e.
        | <code>before.validateArgs</code>, <code>after.sendMetrics</code>, <code>error.logError</code>).
        | When adding middleware via plugin an additional namespace for the plugin should be added
        | (i.e. <code>before.subscription.setupSubscription</code>)
      callout(type="warning")
        h5 Warning!
        | Re-routing can result in an endless loop. It is recommended that you take advantage of the
        | <code>reroutes</code> counter in the <code>req</code> object to ensure a maximum number of reroutes
        | occur before considering the request successful or error.
      prism.prism-custom(language="javascript", :code="reroute")
      p
      h5 # Options
      p
        | Each middleware can be passed with the following options
      ul
        li
          code timeout
          | &nbsp- the time in milliseconds before the middleware fails with a timeout error.
          | If set to 0 there will be no timeout (unless the code itself has a timeout). Defaults to 5 minutes,
          | so unless your process takes a long time this should always be set to something reasonable.
        li
          code name
          | &nbsp;- name to use for routing and metrics
    router-link.next-section.pull-left.text-left(:to="{ name: 'learn.middleware' }")
      span Continue Reading →
      h4 Libraries
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
        middleware: `const middleware = (req, res, next) => {
  ...
}`,
        req: `{
  source,
  args,
  context,
  info,
  result,
  error,
  reroutes,
  ...
}`,
        reroute: `factory.after((req, res, next) => {
  const { result, reroutes } = req
  return result.isFoo || reroutes > 2
    ? next()
    : next('resolve')
})`
      }
    }
  }
</script>