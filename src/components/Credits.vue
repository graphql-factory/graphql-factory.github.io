<template lang="pug">
  .container.text-left.link-menu
    h4 Credits
    p.text-smaller
      | Thanks to all the free and open source resources
    ul
      li Icons
      li
        | Icons made by&nbsp;
        a(href="https://www.flaticon.com/authors/popcorns-arts") Icon Pond
        | &nbsp;from&nbsp;
        a(href="https://www.flaticon.com") www.flaticon.com
      li
        | Icons made by&nbsp;
        a(href="https://www.flaticon.com/authors/vectors-market") Vectors Market
        | &nbsp;from&nbsp;
        a(href="https://www.flaticon.com") www.flaticon.com
      li
        | Icons made by&nbsp;
        a(href="https://www.flaticon.com/authors/dinosoftlabs") DinosoftLabs
        | &nbsp;from&nbsp;
        a(href="https://www.flaticon.com") www.flaticon.com
    ul
      li Inspiration
      li
        | Layout inspired by&nbsp;
        a(href="http://graphql.org/") graphql.org
      li
        | API Documentation inspired by&nbsp;
        a(href="https://rethinkdb.com/") rethinkdb.com
      li
        a(href="http://dev.apollodata.com/tools/graphql-tools/index.html") GraphQL Tools
        | &nbsp;for features like schema stitching, graphql-server, etc.
      li
        a(href="https://expressjs.com/") express.js
        | &nbsp;for the middleware API spec I basically copied
    ul
      li Code
      li
        a(href="https://github.com/taion/graphql-type-json") graphql-type-json
        | &nbsp;ported code to a factory definition for types plugin
      li
        a(href="https://github.com/soundtrackyourbrand/graphql-custom-datetype") graphql-custom-datetype
        | &nbsp;ported code to a factory definition for types plugin
      li
        a(href="https://github.com/stylesuxx/graphql-custom-types") graphql-custom-types
        | &nbsp;ported code for Email and URL to a factory definition for types plugin
</template>

<style scoped>
  .link-menu > ul {
    list-style: none;
    padding-left: 0px;
  }
  .link-menu > ul > li {
    font-size: 0.85em;
    cursor: pointer;
    padding-top: 5px;
  }

  .link-menu > ul > li:first-child {
    color: #000;
    font-weight: 600;
  }
</style>