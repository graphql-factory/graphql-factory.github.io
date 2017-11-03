export default {
  title: 'Middleware',
  /*
  next: {
    title: 'Libraries',
    name: 'learn.libraries'
  },
  */
  content: [
    {
      component: 'paragraph',
      html: 'Middleware is made up of 1 or more functions that get ' +
      'executed at various points in a request\'s lifecycle. In GraphQL ' +
      'Factory there are before, after, and error middleware types'
    },
    {
      component: 'paragraph',
      html: '<h5># API</h5>'
    },
    {
      component: 'paragraph',
      html: 'All middleware types have the same API. They take use express.js ' +
      '```req```, ```res``` and ```next``` arguments to ' +
      'control the flow of a request and potentially modify its data.'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `const middleware = (req, res, next) => {
  ...
}`
    },
    {
      component: 'paragraph',
      html: '<h5>◘ req</h5>'
    },
    {
      component: 'paragraph',
      html: 'The ```req``` argument contains all the data about the request which ' +
      'includes the resolver arguments ```source```, ```args```, ' +
      '```context```, and ```info```.'
    },
    {
      component: 'paragraph',
      html: 'Each request will also add a ```result``` value after the resolve function ' +
      'is called and an ```error``` value if an error is encountered. You can modify/add ' +
      '```error``` and ```result``` or add any other properties to the ```req``` object you ' +
      'would like the next middleware(s) to have acccess to. Additionally a ```reroutes``` ' +
      'count is kept to keep track of re-routes.' +
      '\n'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
  source,
  args,
  context,
  info,
  result,
  error,
  reroutes,
  ...
}`
    },
    {
      component: 'paragraph',
      html: '<h5>◘ res</h5>'
    },
    {
      component: 'paragraph',
      html: 'The ```res``` argument is an object that contains ' +
      'two methods ```end``` and ```send```.'
    },
    {
      component: 'list',
      ordered: false,
      items: [
        '<b>end</b> - Takes an optional ```data``` argument and ends the request with a error if ' +
        'data is an instance of Error or ```request.error``` has a value. Otherwise it will end ' +
        'with success and the value of ```data``` or ```req.result```',
        '<b>send</b> - Takes a single ```result``` argument and sends that value ' +
        'ending the request with success'
      ]
    },
    {
      component: 'paragraph',
      html: '<h5>◘ next</h5>'
    },
    {
      component: 'paragraph',
      html: '```next``` is a function that either routes to the next middleware if called ' +
      'with no arguments, routes to the error middleware if an instance of Error is passed, ' +
      'or routes to the resolve function if ```"resolve"``` is passed.'
    },
    {
      component: 'paragraph',
      html: '<h5># Before</h5>'
    },
    {
      component: 'paragraph',
      html: 'Before middleware runs before the resolve function. It can be useful for modifying ' +
      'arguments, capturing request start times, authorizing a request before the resolver has ' +
      'run, etc. Each middleware will be run in the order it was added.'
    },
    {
      component: 'paragraph',
      html: '<h5># After</h5>'
    },
    {
      component: 'paragraph',
      html: 'After middleware runs after the resolve function. It can be usefule for sending ' +
      'information about the result to external systems, validating the result, masking result ' +
      'fields, etc. Each middleware will be run in in the order it was added.'
    },
    {
      component: 'paragraph',
      html: '<h5># Error</h5>'
    },
    {
      component: 'paragraph',
      html: 'Error middleware is only run if the before middleware, after middleware, or resolve ' +
      'function encounter an error. If an error middleware itself encounters an error or an error ' +
      'is called in the next method it will immediately end the request.'
    },
    {
      component: 'paragraph',
      html: '<h5># Re-routing</h5>'
    },
    {
      component: 'paragraph',
      html: 'Re-routing allows you to use the next method to route to a named route name. ' +
      'This allows a middleware to be called multiple times. This may be useful if a request ' +
      'needs to retry some piece of code. By default the the resolve function is named the ' +
      'reserved name ```resolve```. Re-routing middleware requires you to name your middleware ' +
      'with the name option during registration. If re-routing to a non-existant route the request ' +
      'will error. If calling a non-existant route in error middleware, the request will end ' +
      'the request with error.'
    },
    {
      component: 'paragraph',
      html: 'As a best practice, route names should be namespaced with their type and a ' +
      'unique name (i.e. ```before.validateArgs```, ```after.sendMetrics```, ```error.logError```). ' +
      'When adding middleware via plugin an additional namespace for the plugin should ' +
      'be added (i.e. ```before.subscription.setupSubscription```)'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `factory.after((req, res, next) => {
  const { result, reroutes } = req
  return result.isFoo || reroutes > 2
    ? next()
    : next('resolve')
})`
    },
    {
      component: 'paragraph',
      html: '<h5># Options</h5>'
    },
    {
      component: 'paragraph',
      html: 'Each middleware can be passed with the following options'
    },
    {
      component: 'list',
      ordered: false,
      items: [
        '```timeout``` - the time in milliseconds before the middleware fails with a ' +
        'timeout error. If set to 0 there will be no timeout (unless the code itself ' +
        'has a timeout). Defaults to 5 minutes, so unless your process takes a long ' +
        'time this should always be set to something reasonable',
        '```name``` - name to use for routing and metrics'
      ]
    }
  ]
}
