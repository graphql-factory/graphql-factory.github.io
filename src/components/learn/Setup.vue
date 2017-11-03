<template lang="pug">
  .container-fluid
    .text-left
      h3 Setup
      p
        | GraphQL Factory is a JavaScript library published to&nbsp;
        a(href="https://www.npmjs.com", target="_blank") npm
        | . To use it, you must have <b>nodejs</b> and <b>npm</b> installed on your development machine.
        | You must also install a version of <code>graphql>=0.9.0</code>.
      h5 # Installation
      p
        | To add graphql-factory to your project, change you your projects root directory and type the following
      prism.prism-custom(language="bash", :code="install", :plugins="['command-line']")
      callout(type="info") You can also use <b>yarn</b> to install these packages if you prefer
      h5 # Instantiation
      p
        | When you import <code>graphql-factory</code> you get a function that requires calling with an instance
        | of the <code>graphql</code> library as its only argument. This is done for a few reasons.
        | The first reason is to limit the instances of <code>graphql</code> in the project as multiple versions
        | can cause issues. The second is to allow the developer to use the most current version
        | of <code>graphql</code> without waiting on a release of <code>graphql-factory</code>.
      callout(type="info")
        | Note that when using ES6 import you must import the entire <code>graphql</code> library as a single
        | object using <code>import * as</code>
      prism.prism-custom(language="javascript", :code="inst")
      p
        | The factory has now been created and is ready to start using definitions, plugins, middleware, etc.
    router-link.next-section.pull-left.text-left(:to="{ name: 'learn.factory' }")
      span Continue Reading →
      h4 The Factory
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
        install: 'npm install --save graphql graphql-factory',
        inst: `import * as graphql from 'graphql'
import GraphQLFactory from 'graphql-factory'

const factory = GraphQLFactory(graphql)`
      }
    }
  }
</script>