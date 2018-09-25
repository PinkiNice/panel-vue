<template lang="pug">
  .card.position-relative.card--big
    .card-header.card-content
      h2.title.is-size-3.t-uppercase.t-center Новые вопросы
      .notificationCounter.flex.flex-alignCenter.flex-justifyCenter 5

    .card-body.card-content
      ul.border-childs.border-clearLast
        li.flex.paddingY-3.flex-alignCenter.flex-justify(v-for="i in [1, 2, 3, 4, 5]")
          div.t-nowrap.t-truncate Руслан казимагомедов #[span.color-gray спросил(а)] как заготовить огурцы на зиму
          .flex.flex-alignCenter.border-round.bg-red90.paddingX-3.paddingY-1.marginLeft-2.t-lineHeight-1
            span.is-size-3 3 
            | &nbsp;
            div
              div дня
              div назад
</template>

<script>
export default {
  name: 'EventListDumb',
  props: {
    events: {
      type: Array,
      default: () => [],
    },
    newEventsCounter: {
      type: Number,
      default: null,
    },
    title: {
      type: String,
      requierd: true,
    }
  },
  data() {
    return {};
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