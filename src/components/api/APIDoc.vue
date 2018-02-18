<template lang="pug">
  .container-fluid.text-left.api-class
    h3 API Reference
    | GraphQL Factory is a toolkit the provides utilities
    | for building and executing graphql schemas. Only the main utilities are documented
    | here. Undocumented utilities generally support main utilities and can still be
    | imported into a project.
    callout(type="info", html="Please note that the examples here use ES7 syntax which may \
    require a library like <a href=https://babeljs.io/ target=_blank>babel.js</a>")
    hr(style="margin-top: 3em; margin-bottom: 2em;")
    h4.weak SchemaDefinition
    p A class for iteratively building a schema definition in GraphQL Factory Definition Format which can be exported in various formats and used to construct a GraphQLSchema
    ul
      router-link.pointer.link(tag="li", :to="{ name: 'api.schemadefinition', hash: '#constructor' }") Constructor
      router-link.pointer.link(tag="li", :to="{ name: 'api.schemadefinition', hash: '#properties' }") Properties
      router-link.pointer.link(tag="li", :to="{ name: 'api.schemadefinition', hash: '#events' }") Events
      router-link.pointer.link(tag="li", :to="{ name: 'api.schemadefinition', hash: '#methods' }") Methods
    b Example
    prism(language="javascript", :code="definitionExample")
    router-link(:to="{ name: 'api.schemadefinition' }") Read more about this class →
    p
    hr(style="margin-top: 3em; margin-bottom: 2em;")
    h4.weak SchemaBacking
    p A class for iteratively building a backing object which contains functions that can be mapped to a schema build using schema language
    b Example
    prism(language="javascript", :code="backingExample")
    router-link(:to="{ name: 'api.schemabacking'}") Read more about this class →
    p
    hr
    p
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
        definitionExample: `import { SchemaDefinition } from 'graphql-factory';
import fooDefinition from './fooDefinition';

async function main() {
  const definition = await new SchemaDefinition()
    .use(fooDefinition);

  const schema = await definition.buildSchema();
}

main();`,
        backingExample: `import { SchemaBacking } from 'graphql-factory';

const backing = new SchemaBacking()
  .Object('Query')
  .resolve('readFoo', (source, args, context) => {
    const { db } = context;
    return db.table('foo').get(args.id);
  })
  .resolve('readBar', (source, args, context) => {
    const { db } = context;
    return db.table('bar').get(args.id);
  })
  .Object('Mutation')
  .resolve('createFoo', (source, args, context) => {
    const { db } = context;
    return db.table('foo').insert(args);
  })
  .backing`,
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