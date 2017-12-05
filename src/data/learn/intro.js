export default {
  title: 'Learning GraphQL Factory',
  next: {
    title: 'Setup',
    name: 'learn.setup'
  },
  content: [
    {
      component: 'callout',
      type: 'primary',
      html: 'These documents assume you are already familiar with graphql ' +
      'concepts. If you are not, it is recommended that you first review ' +
      'the <a href="http://graphql.org/learn/", target="_blank">learn</a> ' +
      'section on the <a href="http://graphql.org/", target="_blank">graphql ' +
      'project page</a>.'
    },
    {
      component: 'callout',
      type: 'info',
      html: 'This documentation was modeled after the ' +
      '<a href="http://graphql.org/learn" target="_blank">graphql.org learning documentation</a> ' +
      'to keep the learning experience similar'
    },
    {
      component: 'callout',
      type: 'warning',
      html: 'This documentation mainly applies to <b>graphql-factory@>=3.0.0</b>. ' +
      'For 2.1.0 and below see ' +
      '<a href="http://graphql-factory.readthedocs.io/en/latest/", target="_blank">v2 docs</a>'
    },
    {
      component: 'paragraph',
      html: 'GraphQL Factory is a toolkit for designing and extending graphql ' +
      'definitions. It is designed to be extensible via plugins and middleware ' +
      'so that you can build on work the community has already published or ' +
      'make your own contributions'
    },
    {
      component: 'paragraph',
      html: 'At its core, GraphQL Factory provides a set of tools for building definitions ' +
      'in ```GraphQL&nbsp;Factory&nbsp;Definition&nbsp;Format``` which is a ```JSON``` ' +
      'structured JavaScript object. This object can be extended and incrementally built' +
      'before eventually exporting or building a schema from it allowing you to create this'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLString
} from 'graphql'

const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLString }
  }
})

const UserQuery = new GraphQLObjectType({
  name: 'UserQuery'
  fields: {
    listUsers: {
      type: new GraphQLList(User),
      resolve (source, args, context, info) {
        const { r } = context
        return r.table('user')
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: UserQuery
})`
    },
    {
      component: 'paragraph',
      html: 'With this'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `import { SchemaDefinition } from 'graphql-factory'

const definition = {
  types: {
    User: {
      fields: {
        id: 'ID!',
        name: 'String!',
        email: 'String'
      }
    },
    UserQuery: {
      fields: {
        listUsers: {
          type: '[User]',
          resolve (source, args, context, info) {
            const { r } = context
            return r.table('user')
          }
        }
      }
    }
  },
  schema: {
    query: 'UserQuery'
  }
}

const schema = new SchemaDefinition()
  .use(definition)
  .buildSchema()
`
    },
    {
      component: 'paragraph',
      html: 'Or using a combination of Schema Language and a ```SchemaBacking``` object like this'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `import { SchemaBacking, SchemaDefinition } from 'graphql-factory'
const definition = \`
type User {
  id: ID!
  name: String!
  email: String
}
type UserQuery {
  listUsers: User
}
schema {
  query: UserQuery
}\`

const backing = new SchemaBacking()
  .Object('UserQuery')
  .resolve('listUsers', (source, args, context, info) => {
    const { r } = context
    return r.table('user')
  })
  .backing()

const schema = new SchemaDefinition()
  .use(definition, backing)
  .buildSchema()
`
    }
  ]
}
