<template lang="pug">
  .link-menu.text-left
    ul
      li(style="color: #000; font-weight: 400;") API v3.0.0
    ul
      li factory
      li use
      li library
      li before
      li after
      li error
      li regenerate
      li on
      li emit
    ul
      li library
      li request
    ul
      li tools
    ul
      li GraphQLFactory
      li Definition
      li Decomposer
      li Expander
      li Generator
      li plugins
      li tools
</template>

<style scoped>
  .link-menu > ul {
    list-style: none;
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