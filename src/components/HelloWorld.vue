<template lang="pug">
  .row.small-gutters
    .col-sm-3
      .card
        img.card-img-top(src="../assets/network-graph.jpg")
        // img(src="../assets/factory-small.png", style="position: relative; top: -40px; display: block; margin: 0px auto; background-color: #FFF; padding: 5px; border-radius: 50%;")
        .card-body.text-left
          h5.card-title
            | GraphQL Factory
          p.card-text.text-smaller
            | GraphQL Factory is a toolkit for quickly creating graphql APIs.
            | It has useful features like resolver middleware, schema merging,
            | and support for plugins.
        ul.list-group.list-group-flush.text-left
          li.list-group-item
            i.fa.fa-fw.fa-twitter
            a(href="https://twitter.com/GraphQLFactory", style="font-size: 0.8em; line-height: 1em;margin-left: 5px;") @graphqlfactory
            br
            i.fa.fa-fw.fa-github
            a(href="https://github.com/graphql-factory", style="font-size: 0.8em; line-height: 1em;margin-left: 5px;") @graphql-factory
      p
      .card
        .card-body
          a.twitter-timeline(href="https://twitter.com/GraphQLFactory?ref_src=twsrc%5Etfw") Tweets by GraphQLFactory
    .col-sm-6
      .card
        .card-body.text-left
          h5
            i.fa.fa-fw.fa-gear
            | &nbsp;Define your API
          p.card-text.text-smaller
            | GraphQL Factory allows you to easily extend your graphql API by defining your entire project with a
            | plain JavaScript object.
          prism(language="javascript", :code="define")
      p
      .card
        .card-body.text-left
          h5
            i.fa.fa-fw.fa-book
            | &nbsp;Build your Library
          p.card-text.text-smaller
            | Build a definition by calling the <code>use()</code> with a factory definition, plugin, function, or
            | graphql object and then generate a library with the <code>library()</code> method
          prism(language="javascript", :code="library")
      p
      .card
        .card-body.text-left
          h5
            i.fa.fa-fw.fa-rocket
            | &nbsp;Make a Request
          p.card-text.text-smaller
            | Using the <code>request()</code> method, easily make a grapql request
          prism(language="javascript", :code="request")
    .col-sm-3
      .card
        .card-body.text-left
          h5.card-title
            i.fa.fa-link
            | &nbsp;Quick Links
</template>

<script type="text/babel">
  import Prism from 'vue-prismjs'

  export default {
    components: {
      Prism
    },
    data () {
      return {
        request: `lib.request({
    schema: 'Factories',
    requestString: \`
            query Query {
                listFactories {
                    id
                    name
                }
            }\`
})
.then(results => {
  console.log(results)
})`,
        library: `const lib = factory
  .use(definition)
  .library()`,
        define: `import * as graphql from 'graphql'
import GraphQLFactory from 'graphql-factory'

const factory = GraphQLFactory(graphql)
const definition = {
  types: {
    Factory: {
      fields: {
        id: 'ID!',
        name: 'String!'
      }
    },
    FactoryQuery: {
      fields: {
        listFactories: {
          type: '[Factory]',
          resolve (source, args, context, info) {
            const { r } = context
            return r.table('factory')
          }
        }
      }
    }
  },
  schemas: {
    Factories: {
      query: 'FactoryQuery'
    }
  }
}

`
      }
    }
  }
</script>
