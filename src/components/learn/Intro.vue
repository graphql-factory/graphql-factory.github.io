<template lang="pug">
  .container-fluid
    .text-left
      h3 GraphQL Factory
      callout(type="primary")
        | These documents assume you are already familiar with graphql concepts.
        | If you are not, it is recommended that you first review the&nbsp;
        a(href="http://graphql.org/learn/", target="_blank") learn
        | &nbsp;section on the &nbsp;
        a(href="http://graphql.org/", target="_blank") graphql project page.
      callout(type="info")
        | This documentation is intentionally modeled after the&nbsp;
        a(href="http://graphql.org") graphql.org
        | &nbsp;site to make transitioning
        | from there to here easier.
      callout(type="warning")
        | This documentation mainly applies to <b>graphql-factory@>=3.0.0</b>. For <b>2.1.0</b>
        | and below see &nbsp;
        a(href="http://graphql-factory.readthedocs.io/en/latest/", target="_blank") v2 docs
      p.card-text
        | GraphQL Factory is a toolkit for designing and extending graphql definitions. It is designed to
        | be extensible via plugins and middleware so that you can build on work the community has already
        | published.
      p.card-text
        | At its core, GraphQL Factory builds a definition object that is converted into a registry of types
        | and schemas that can be accessed directly or through a library via the <code>request</code> method
        | which allows you to accomplish this
      prism.prism-custom(language="javascript", :code="code1")
      p.card-text
        | With this
      prism.prism-custom(language="javascript", :code="code2")
    router-link.next-section.pull-left.text-left(:to="{ name: 'learn.setup' }")
      span Continue Reading →
      h4 Setup
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
        code1: `const User = new GraphQLObjectType({
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
      type: User,
      resolve (source, args, context, info) {
        const { r } = context
        return r.table('user')
      }
    }
  }
})

const UsersSchema = new GraphQLSchema({
  query: UserQuery
})`,
        code2: `const definition = {
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
          type: 'User',
          resolve (source, args, context, info) {
            const { r } = context
            return r.table('user')
          }
        }
      }
    }
  },
  schemas: {
    UsersSchema: {
      query: 'UserQuery'
    }
  }
}`
      }
    }
  }
</script>