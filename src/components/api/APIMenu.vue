<template lang="pug">
  .link-menu.text-left.menu-nav-content
    p
    ul
      li(style="color: #000; font-weight: 400;") API v3.0.0
    ul
      router-link(tag="li", to="#SchemaDefinition") SchemaDefinition
      li
        code parameters
      li
        code properties
      li
        code events
      router-link(tag="li", to="#buildSchema") buildSchema
      li export
      li merge
      li omit
      li pick
      li use
      li validate

    ul
      li SchemaBacking
      li
        code parameters
      li
        code properties
      li Directive
      li Interface
      li Object
      li Scalar
      li Union
      li export
      li import
      li merge
      li resolve
      li subscribe
      li validate
    ul
      li schema
      li
        code properties
      li request
</template>

<style scoped>
  .link-menu > ul {
    list-style: none;
    padding-right: 40px;
  }
  .link-menu > ul > li {
    font-size: 0.9em;
    cursor: pointer;
    border-left: 3px solid #5bafdb;
  }

  .link-menu > ul > li:first-child {
    color: #5bafdb;
    font-weight: 600;
    border-left: none;
  }

  .link-menu > ul > li:not(:first-child):before {
    content: "\00a0 ";
  }

  li.active {
    color: #5bafdb;
    display: list-item;
    list-style: disc outside;
  }
</style>