<template lang="pug">
  .container-fluid.text-left
    h3 API Reference
    | GraphQL Factory is a toolkit the provides utilities
    | for building and executing graphql schemas. Only the main utilities are documented
    | here. Undocumented utilities generally support main utilities and can still be
    | imported into a project.
    callout(type="info", html="Please note that the examples here use ES7 syntax which may \
    require a library like <a href=https://babeljs.io/ target=_blank>babel.js</a>")
    h4.weak SchemaDefinition
    p A class for iteratively building a schema definition in GraphQL Factory Definition Format which can be exported in various formats and used to construct a GraphQLSchema
    h4.weak SchemaBacking
    p A class for iteratively building a backing object which contains functions that can be mapped to a schema build using schema language
    hr
    api-topic(v-for="(config, name) in apiData", :key="name", :config="config")
    hr

    b.mono options
    grid.table.table-bordered.table-sm.table-responsive-sm.mono(:config="gcfg")
    table.table.table-bordered.table-sm.table-responsive-sm.mono
      thead.thead-light
        tr
          th(scope="col") Name
          th(scope="col") Type
          th(scope="col") Description
      tbody
        tr
          td [noDefaultTypes=false]
          td <code>boolean</code>
          td Prevents <code>JSON</code> and <code>DateTime</code> types from being automatically added to the definition
        tr
          td [onConflict]
          td <code>function</code>
          td Allows a custom conflict resolution function for merge conflicts
    h5 Properties
    p
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
    p
    h5 Events
    table.table.table-bordered.table-sm.table-responsive-sm.mono
      thead.thead-light
        tr
          th(scope="col") Name
          th(scope="col") Data
          th(scope="col") Description
      tbody
        tr(id="SchemaDefinition.events.error-anchor")
          td error
          td <code>Error</code>
          td Error thrown from the definition or execution
        tr(id="SchemaDefinition.events.warn-anchor")
          td warn
          td <code>*</code>
          td Warning data
        tr(id="SchemaDefinition.events.info-anchor")
          td info
          td <code>*</code>
          td Informational data
        tr(id="SchemaDefinition.events.execution-anchor")
          td execution
          td <code>ExecutionTrace</code>
          td An object containing the complete execution tracing details
    h4(id="buildSchema-anchor") buildSchema( )
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
  import apiData from '@/data/api'
  import ApiTopic from '@/components/api/ApiTopic'
  import Callout from '../common/Callout'
  import Grid from '../common/Grid'
  export default {
    components: {
      ApiTopic,
      Prism,
      Callout,
      Grid
    },
    data () {
      return {
        apiData,
        gcfg: {
          headClass: 'thead-light',
          headers: [
            { title: 'Name' },
            { title: 'Type' },
            { title: 'Description' }
          ],
          rows: [
            [
              '[noDefaultTypes=false]',
              '<code>boolean</code>',
              'Prevents <code>JSON</code> and <code>DateTime</code> types from being automatically added to the definition'
            ],
            [
              '[onConflict]',
              '<code>function</code>',
              'Allows a custom conflict resolution function for merge conflicts'
            ]
          ]
        }
      }
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
  .properties {
    list-style: none;
    padding-left: 0px;
  }
  .weak {
    font-weight: 400;
  }
</style>