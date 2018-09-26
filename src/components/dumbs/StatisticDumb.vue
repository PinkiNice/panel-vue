<template lang="pug">
  div.flex
    div
      span.is-size-2 {{ value }}
      span &nbsp;{{ units }}
    div.flex.flex-alignCenter.paddingLeft-2
      .icon(v-if="icon").is-size-2
        img(:src="icon")
</template>

<script>
export default {
  name: 'StatisticDumb',
  props: {
    units: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
    },
    value: {
      type: Number,
    }
  },
  data() {
    return {

    };
  },
  computed: {

  },
  mounted() {
    console.log(this.units);
  },
  methods: {

  }
}
</script>
<style lang="scss">
</style>