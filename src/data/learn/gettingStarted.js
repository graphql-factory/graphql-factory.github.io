export default {
  title: 'Getting Started',
  next: {
    title: 'GFD Format',
    name: 'learn.gfdFormat'
  },
  content: [
    {
      component: 'paragraph',
      html: '<h4>Installation</h4>'
    },
    {
      component: 'paragraph',
      html: 'GraphQL Factory is a node.js package that depends on the official ```graphql-js``` ' +
      'package also being installed in your project. Simply use the package manager of your ' +
      'choice to install both packages.'
    },
    {
      component: 'prism',
      language: 'bash',
      code: `npm install -s graphql-factory graphql`
    },
    {
      component: 'paragraph',
      html: '<hr><h4>Definition</h4>'
    },
    {
      component: 'paragraph',
      html: 'The ```SchemaDefinition``` class allows the developer to iteratively build a ' +
      'schema from pieces of a definition. This lends itself to schema merging/stitching and ' +
      'allows schemas to be developed independently by multiple developers'
    },
    {
      component: 'paragraph',
      html: 'Additionally, a ```SchemaDefinition``` instance can consume pieces of a schema ' +
      'from various sources. One could potentially combine an already instantiated ```GraphQLSchema``` ' +
      'object with a type definition in ```GraphQL&nbsp;Factory&nbsp;Definition&nbsp;Format``` and a remote schema ' +
      'into a single schema with multiple calls to the ```use``` method'
    },
    {
      component: 'paragraph',
      html: '<h5>Example</h5>'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `import fooSchema from './fooSchema';
import {
  SchemaDefinition,
  RemoteSchemaHTTP
} from 'graphql-factory';

async function main() {
  const remote = new RemoteSchemaHTTP('http://api.graphloc.com/graphql');
  const schema = await new SchemaDefinition()
    .use(fooSchema)
    .use(remote)
    .use({
      context: {
        jwt: process.env.JWT
      }
    })
    .buildSchema();
  
  const result = await schema.request({
    source: \`query Loc ($ip: String!) {
      getLocation(ip: $ip) {
        country {
          names {
            en
          }
          geoname_id
          iso_code
        }
        location {
          latitude
          longitude
        }
      },
      readFoo {
        name
      }
    }\`,
    variableValues: {
      ip: "189.59.228.170"
    }
  });
}

main();
`
    }
  ]
}
