<template lang="pug">
  .container-fluid.text-left
    .row(v-for="cardRow in cards")
      div(v-for="card in cardRow", :class="[`col-sm-${cardWidth}`]")
        .card
          .card-body
            h5.card-title(v-text="'@' + card.name")
            p.card-text(v-text="card.description")
            .container-fullwidth
              span.tag(v-for="tag in card.tags", v-text="tag")
            br
            a.link(href="#") Read more about this directive →
</template>

<script type="text/babel">
export default {
  computed: {
    cardWidth () {
      return Math.floor(12 / this.rowWidth)
    },
    cards () {
      return this.plugins.reduce((grid, card, index) => {
        const row = Math.floor(index / this.rowWidth)
        if (grid.length < row + 1) {
          grid.push([])
        }
        grid[grid.length - 1].push(card)
        return grid
      }, [])
    }
  },
  data () {
    return {
      rowWidth: 3,
      plugins: []
    }
  }
}
</script>

<style scoped>
.card {
  margin-top: 30px;
}

.tag {
  background-color: #3f87a6;
  color: #fdfdfd;
  border-radius: 3px;
  padding: 5px;
  display: inline-block;
  font-size: 0.8em;
  margin: 2px;
}
</style>