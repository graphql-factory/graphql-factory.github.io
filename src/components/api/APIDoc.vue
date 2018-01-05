<template lang="pug">
  .container-fluid.text-left
    h3 GraphQL Factory API Reference
    callout(type="info", html="A subset of the complete API has been documented. \
    The undocumented API deals with internals that should for the most part not \
    be accessed during regular use. For undocumented functionality please reference \
    the <a href=\"https://github.com/graphql-factory/graphql-factory\" \
    target=\"_blank\">source code</a>")
    h4.sub-title GraphQLFactory
    p
      | The main class for creating a new <code>factory</code> instance. Create a new instance with <code>new</code>
    prism.prism-custom(language="javascript", code="import GraphQLFactory from \'graphql-factory\'\nconst factory = new GraphQLFactory()")
    hr.sub-title

    h4.sub-title Factory <code>instance</code>
    p
      | The factory instance is a chainable definition builder. It extends the <code>EventEmitter</code>
      | class and is able to generate a GraphQL Factory <code>Library</code> that can be used to make
      | graphql API requests
    hr.sub-title

    h4.sub-title use
    callout.mono(type="default", html="factory.use(Definition) → Factory<br>\
    factory.use(Plugin) → Factory<br>\
    factory.use(Function, functionName) → Factory<br>\
    factory.use(typeLanguage[, extension, schemaName]) → Factory<br>\
    factory.use(GraphQLSchema, schemaName) → Factory<br>\
    factory.use(GraphQLObjectType) → Factory<br>\
    factory.use(GraphQLInputObjectType) → Factory<br>\
    factory.use(GraphQLEnumType) → Factory<br>\
    factory.use(GraphQLScalarType) → Factory<br>\
    factory.use(GraphQLUnionType) → Factory<br>\
    factory.use(GraphQLInterfaceType) → Factory<br>")
    p
      | Imports definition related things and merges them into the current definition
    prism.prism-custom(language="javascript", code="const TypesPlugin = new GraphQLFactory.plugins.Types()\n\factory\n\
    .use(definition)\n\
    .use(TypesPlugin)")
    hr.sub-title

    h4.sub-title library
    callout.mono(type="default", html="factory.library([generateOptions]) → Library")
    p
      | Generates a new <code>Library</code> instance. Can optionally merge schemas into a single schema
    prism.prism-custom(language="javascript", code="factory\n\
    .use(definition)\n\
    .library({\n\
      mergeSchemas: 'root'\n\
    })")
    hr.sub-title

    h4.sub-title before
    callout.mono(type="default", html="factory.before(middleware[, middlewareOptions]) → Library")
    p
      | Adds a before middleware to the current definition. Before middleware is run before the
      | resolve function
    prism.prism-custom(language="javascript", code="factory\n\
    .before((req, res, next) => {\n\
      const { args } = req\n\
      args.requested = Date.now()\n\
      return next()\n\
    })")
    hr.sub-title

    h4.sub-title after
    callout.mono(type="default", html="factory.after(middleware[, middlewareOptions]) → Library")
    p
      | Adds an after middleware to the current definition. After middleware is run after the
      | resolve function and has access to the result via <code>req.result</code>
    prism.prism-custom(language="javascript", code="factory\n\
    .after((req, res, next) => {\n\
      const { result } = req\n\
      result.password = '*****'\n\
      return next()\n\
    })")
    hr.sub-title

    h4.sub-title error
    callout.mono(type="default", html="factory.error(middleware[, middlewareOptions]) → Library")
    p
      | Adds an error middleware to the current definition. Error middleware is run in the event
      | an <code>after</code>, <code>before</code>, or <code>resolve</code> encounters an error
      | or if <code>next</code> was called with an error. It
      | has access to the error via <code>req.error</code>
    prism.prism-custom(language="javascript", code="factory\n\
    .error((req, res, next) => {\n\
      req.error = new Error('Error:' + req.error.message)\n\
      return next()\n\
    })")
    hr.sub-title

    h4.sub-title Definition
    callout.mono(type="default", html="GraphQLFactory.Definition([factory]) → Definition")
    p
      | Creates a new empty GraphQL Factory <code>Definition</code>
    prism.prism-custom(language="javascript", code="const definition = new GraphQLFactory.Definition()")
    hr.sub-title
    h4.sub-title Decomposer
    callout.mono(type="default", html="GraphQLFactory.Decomposer() → Decomposer")
    p
      | Creates a new empty GraphQL Factory <code>Decomposer</code> capable of decomposing native graphql
      | types into factory definitions
    prism.prism-custom(language="javascript", code="const decomposer = new GraphQLFactory.Decomposer()")
    hr.sub-title
</template>

<script type="text/babel">
  import Prism from 'vue-prismjs'
  import Callout from '../common/Callout'
  export default {
    components: {
      Prism,
      Callout
    }
  }
</script>

<style scoped>
  h4.sub-title {
    margin-top: 30px;
  }
  hr.sub-title {
    margin-top: 30px;
    margin-bottom: 50px;
  }
  .mono {
    font-family: monospace;
    font-size: 1em !important;
  }
</style>