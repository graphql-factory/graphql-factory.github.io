<template lang="pug">
  .link-menu.text-left
    p
    ul
      li(style="color: #000; font-weight: 300;")
        b Learn v3.0.0
    ul
      router-link(tag="li", :to="{ name: 'learn' }", active-class="active", exact) Introduction
      router-link(tag="li", :to="{ name: 'learn.setup' }", active-class="active", exact) Setup
      router-link(tag="li", :to="{ name: 'learn.factory' }", active-class="active", exact) The Factory
    ul
      router-link(tag="li", :to="{ name: 'learn.definitions' }", active-class="active", exact) Definitions
      router-link(tag="li", :to="{ name: 'learn.typeDefinitions' }", active-class="active", exact) Type Definitions
      router-link(tag="li", :to="{ name: 'learn.schemaDefinitions' }", active-class="active", exact) Schema Definitions
      router-link(tag="li", :to="{ name: 'learn.functions' }", active-class="active", exact) Functions
      router-link(tag="li", :to="{ name: 'learn.context' }", active-class="active", exact) Context
      router-link(tag="li", :to="{ name: 'learn.typeLanguage' }", active-class="active", exact) Type Language
    ul
      router-link(tag="li", :to="{ name: 'learn.middleware' }", active-class="active", exact) Middleware
    ul
      li Libraries
      li Building a Library
      li Library Repository
      li Making Requests
    ul
      li Plugins
      li Structure
      li Authoring
</template>

<style scoped>
  .link-menu > ul {
    list-style: none;
  }
  .link-menu > ul > li {
    font-size: 0.85em;
    cursor: pointer;
  }

  .link-menu > ul > li:first-child {
    color: #5bafdb;
    font-weight: 600;
  }

  li.active {
    color: #5bafdb;
    display: list-item;
    list-style: disc outside;
  }
</style>