<template lang="pug">
  .eventCategory
    .card-content.paddingY-2
      .d-inlineBlock.border-round.bg-red50.paddingX-2.t-uppercase Курсы
    .paddingY-2
      table.table
        tr.bg-gradient
          td.td.card-content 
            div.color-red.is-size-7  проходит сейчас
            div Большой разбор
          td.td.card-content #[span.color-red сегодня]
          td.td.card-content 18:00 - 21:00
          td.td.card-content 51 участник
        tr
          td.td.card-content Большой разбор
          td.td.card-content #[span.color-red сегодня]
          td.td.card-content 18:00 - 21:00
          td.td.card-content 51 участник
        tr
          td.td.card-content Большой разбор
          td.td.card-content #[span.color-red сегодня]
          td.td.card-content 18:00 - 21:00
          td.td.card-content 51 участник
    .paddingY-1.t-center
      button.bg-red.paddingX-3.paddingY-2.border-round Добавить новый курс

</template>

<script>
export default {
  name: 'EventCategory',
  props: {

  },
  data() {
    return {

    };
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  }
}
</script>
<style lang="scss">
</style>