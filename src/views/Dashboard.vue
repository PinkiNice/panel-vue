<template lang="pug">
  .columns
    .column.is-6
      ActionListDumb.marginBottom-4
      ActionListDumb.marginBottom-4
      ActionListDumb.marginBottom-4
    .column.is-6
      EventsBoard.marginBottom-3

      h4.title.is-size-4.t-uppercase.color-gray Статистика
      .columns
        .column.flex
          .card
            .flex.flex-justify.flex-wrap
              StatisticDumb.card-content(:value='33' units='продажи' icon="https://cdn.iconscout.com/icon/premium/png-256-thumb/placeholder-43-561693.png")
              StatisticDumb.card-content(:value='8902' units='грн' icon="https://cdn.iconscout.com/icon/premium/png-256-thumb/placeholder-43-561693.png")

        .column.flex
          .card.flex-grow
            .flex.flex-justify
              StatisticDumb.card-content(:value='8902' units='грн' icon="https://cdn.iconscout.com/icon/premium/png-256-thumb/placeholder-43-561693.png")

      .columns
        .column
          .card
            .flex.flex-justify.flex-alignCenter.flex-wrap
              h5.title.is-size-5.t-uppercase.color-gray.card-content Продажи
              .tabs.flex.card-content
                .tab.tab--active Сегодня
                .tab Неделя
                .tab Месяц
                .tab Год
                .tab Все время
</template>

<script>
import ActionListDumb from '../components/dumbs/ActionListDumb.vue';
import StatisticDumb from '../components/dumbs/StatisticDumb.vue';

import EventsBoard from '../components/EventsBoard.vue';

export default {
  name: '',
  components: {
    ActionListDumb,
    EventsBoard,
    StatisticDumb,
  },
  props: {},
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