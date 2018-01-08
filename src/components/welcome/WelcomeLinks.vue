<template lang="pug">
  .link-menu.text-left
    p
    ul
      li
        a(href="https://github.com/graphql-factory/graphql-factory", target="_blank")
          i.btn.fa.fa-github.fa-lg
      li
        a(href="https://twitter.com/graphqlfactory?ref_src=twsrc%5Etfw", target="_blank")
          i.btn.fa.fa-twitter.fa-lg
      li
        a(href="https://medium.com/@graphqlfactory", target="_blank")
          i.btn.fa.fa-medium.fa-lg
      li
        router-link(:to="{ name: 'credits' }")
          i.btn.fa.fa-info-circle.fa-lg
</template>

<style scoped>
.link-menu > ul {
  list-style: none;
  padding: 0px;
}
i.fa {
  max-width: 47px;
  margin-bottom: 15px;
}
i.fa.fa-twitter {
  color: #00aced;
}
i.fa.fa-github, i.fa.fa-medium, i.fa.fa-info-circle {
  color: #24292e;
}
</style>