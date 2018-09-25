<template lang="pug">
  .columns
    .column.is-6
      ActionListDumb.marginBottom-4
      ActionListDumb.marginBottom-4
      ActionListDumb.marginBottom-4
    .column.is-6
      EventsBoard
</template>

<script>
import ActionListDumb from '../components/ActionListDumb.vue';
import EventsBoard from '../components/EventsBoard.vue';

export default {
  name: '',
  components: {
    ActionListDumb,
    EventsBoard
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