<template lang="pug">
  .container-fluid.text-left
    form
      .form-group
        .input-group
          input.form-control(
            v-model.lazy="searchText"
            v-debounce="300",
            type="text",
            placeholder="Search directives...",
            style="border-right: 0px;"
          )
          .input-group-append
            .input-group-text(style="background-color: #fff;")
              i.fa(
                :class="{ 'fa-search': searchText === '', 'fa-times': searchText !== '', pointer: searchText !== '' }",
                @click="searchText=''"
              )
    h6(v-if="!cards.length") No directives match the search text...
    transition-group.row(
      name="fade",
      tag="div"
      )
      div(
        v-for="(card, cidx) in cards",
        :key="cidx",
        :class="{ 'w-100': card.row, [`col-sm-${cardWidth}`]: !card.row }"
      )
        .card(v-if="card.name")
          .card-body
            h5.card-title.directive-name(v-text="'@' + card.name")
            p.card-text(v-text="card.description")
            .container-fullwidth
              span.tag(v-for="tag in card.tags", v-text="tag")
            br
            a.link(href="#") Read more about this directive →
</template>

<script type="text/babel">
import debounce from 'v-debounce'
export default {
  computed: {
    cardWidth () {
      return Math.floor(12 / this.rowWidth)
    },
    cards () {
      return this.directives
      .filter(card => {
        if (this.searchText === '') {
          return true
        }
        const rx = new RegExp(this.searchText, 'img')
        return card.name.match(rx) ||
          card.description.match(rx) ||
          card.tags.filter(tag => {
            return tag.match(rx)
          }).length
      })
      .reduce((grid, card, index) => {
        if (index > 0 && index % this.rowWidth === 0) {
          grid.push({
            row: true
          })
        }
        grid.push(card)
        return grid
      }, [])
    }
  },
  directives: {
    debounce
  },
  data () {
    return {
      rowWidth: 3,
      searchText: '',
      directives: [
        {
          name: 'by',
          description: 'Adds change data to the arguments based on user',
          tags: [
            'standard',
            'change',
            'data',
            'user',
            'modified',
            'created',
            'updated',
            'database',
            'tracking'
          ]
        },
        {
          name: 'id',
          description: 'Identifies the ID field of an object',
          tags: [
            'standard',
            'identity',
            'uuid',
            'primary',
            'key',
            'database',
            'informational'
          ]
        },
        {
          name: 'meta',
          description: 'Attaches generic metadata to a location.',
          tags: [
            'standard',
            'generic',
            'metadata',
            'freeform',
            'json',
            'custom',
            'extensibility'
          ]
        },
        {
          name: 'resolve',
          description: 'Assigns a resolver function from the function store to ' +
          'a field at execution and skips the defined resolver on the filed. ' +
          'This can be used to assign resolvers to a field using only schema ' +
          'language.',
          tags: [
            'standard',
            'resolver',
            'function',
            'schema',
            'language',
            'bypass',
            'skip',
            'override',
            'field',
            'resolve',
            'client',
            'bind',
            'middleware',
            'definition'
          ]
        },
        {
          name: 'typeConfig',
          description: 'Assigns functions from the function store to a ' +
          'type configuration',
          tags: [
            'standard',
            'function',
            'resolver',
            'type',
            'config',
            'serialize',
            'typeof',
            'definition',
            'parseLiteral',
            'parseValue',
            'returnType',
            'definition',
            'schema',
            'type'
          ]
        },
        {
          name: 'validate',
          description: 'Validates a field using a custom validator function. ' +
          'For FIELD and FIELD_DEFINITION location the field result will be ' +
          'validated. For INPUT_FIELD_DEFINITION aka arg the argument value ' +
          'will be validated. A validator should throw an error if validation ' +
          'fails and return nothing if valid.',
          tags: [
            'standard',
            'validation',
            'field',
            'custom',
            'middleware',
            'input',
            'type',
            'error',
            'data',
            'argument',
            'value'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.card {
  margin-bottom: 30px;
}

.directive-name {
  color: #3f87a6;
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