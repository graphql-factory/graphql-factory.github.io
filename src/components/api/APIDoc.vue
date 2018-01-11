<template lang="pug">
  .container-fluid.text-left
    h3 API Reference
    | GraphQL Factory is a toolkit the provides utilities
    | for building and executing graphql schemas. Only the main utilities are documented
    | here. Undocumented utilities generally support main utilities and can still be
    | imported into a project.
    callout(type="info", html="Please note that the examples here use ES7 syntax which may \
    require a library like <a href=https://babeljs.io/ target=_blank>babel.js</a>")
    h4.sub-title(id="SchemaDefinition-anchor") SchemaDefinition <code>extends</code> EventEmitter
    callout.mono(type="default", html="new SchemaDefinition(options) → SchemaDefinition")
    p
      | Constructs a schema definition in GraphQL Factory Definition Format. Merges all inputs/imports
      | into a single definition with customizable merge conflict resolution. Extends the standard
      | EventEmitter class and emits events during build and execution.
    callout(type="warning", html="The <code>SchemaDefinition</code> class builds the definition \
    asynchronously and should be resolved before attempting to access its properties. \
    This can be done by resolving the <code>definition</code> property,\
    the <code>buildSchema</code> method, or the <code>use</code> method with no arguments.")
    prism.prism-custom(language="javascript", code=`import { SchemaDefinition } from 'graphql-factory';
  const definition = await new SchemaDefinition();`)
    p
    h5 Parameters
    table.table.table-bordered.table-sm.table-responsive-sm.mono
      thead.thead-light
        tr
          th(scope="col") Name
          th(scope="col") Type
          th(scope="col") Default
          th(scope="col") Description
      tbody
        tr
          td [options.noDefaultTypes]
          td <code>boolean</code>
          td false
          td Prevents <code>JSON</code> and <code>DateTime</code> types from being automatically added to the definition
        tr
          td [options.onConflict]
          td <code>function</code>
          td DefaultConflictResolutionFn
          td Allows a custom conflict resolution function for merge conflicts
    h5(id="SchemaDefinition.definition-anchor")  SchemaDefinition.definition
    p Returns a <code>Promise</code> that resolves any pending asynchronous code and returns the <code>SchemaDefinition</code>
    table.table.table-bordered.table-sm.table-responsive-sm.mono
      tbody
        tr
          td.table-cell-light Returns
          td
            code Promise&lt;SchemaDefinition&gt;

    table.table.table-bordered.table-sm.table-responsive-sm.mono
      thead.thead-light
        tr
          th(scope="col") Name
          th(scope="col") Type
          th(scope="col") Description
      tbody
        tr
          td definition
          td <code>Promise&lt;SchemaDefinition&gt;</code>
          td Used to resolve any current asynchronous code on the definition
        tr
          td context
          td <code>object</code>
          td The custom context value that will be merged into the execution context
        tr
          td functions
          td <code>object</code>
          td Map of functions that can be referenced by the <code>SchemaDefinition</code>
        tr
          td directives
          td <code>object</code>
          td Map of directive definitions
        tr
          td types
          td <code>object</code>
          td Map of type definitions
        tr
          td schema
          td <code>object</code>
          td schema definition
        tr
          td version
          td <code>string</code>
          td <code>SchemaDefinition</code> version in semver format

    h5 <code>events</code>
    table.table.table-bordered.table-sm.table-responsive-sm.mono
      thead.thead-light
        tr
          th(scope="col") Name
          th(scope="col") Data
          th(scope="col") Description
      tbody
        tr
          td error
          td <code>Error</code>
          td Error thrown from the definition or execution
        tr
          td warn
          td <code>*</code>
          td Warning data
        tr
          td info
          td <code>*</code>
          td Informational data
        tr
          td execution
          td <code>ExecutionTrace</code>
          td An object containing the complete execution tracing details
    hr.sub-title
    h4(id="buildSchema-anchor") buildSchema
    callout.mono(type="default", html="definition.buildSchema([options]) → Promise<GraphQLSchema>")
    p
      | Creates a new <code>GraphQLSchema</code> from the current <code>SchemaDefinition</code>
      | and adds the definition as a property on the schema along with a custom <code>request</code>
      | method that returns results with extensions
    prism.prism-custom(language="javascript", code=`const schema = await new SchemaDefinition()
    .use(definition)
    .buildSchema();
  
  const result = await schema.request({
    source: 'query FooQuery { listFoo { bar } }'
  });`)
    p
    h6 parameters
    table.table.table-bordered.table-sm.table-responsive-sm.mono
      thead.thead-light
        tr
          th(scope="col") Name
          th(scope="col") Type
          th(scope="col") Default
          th(scope="col") Description
      tbody
        tr
          td [options.useMiddleware]
          td <code>boolean</code>
          td true
          td Wraps each resolver function in middleware that merges the definition context into the execution context
        tr
          td [options.factoryExecution]
          td <code>boolean</code>
          td true
          td Uses a custom execution which supports directive resolvers and execution tracing
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
  .table-cell-light {
    background-color: #e9ecef;
    font-weight: 600;
  }
  h4.sub-title {
    margin-top: 30px;
  }
  hr.sub-title {
    margin-top: 30px;
    margin-bottom: 90px;
  }
  .mono {
    font-family: monospace;
    font-size: 1em !important;
  }
  .properties {
    list-style: none;
    padding-left: 0px;
  }
</style>