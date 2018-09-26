<template lang="pug">
  .tabs
    .tab(v-for="option on options")

</template>

<script>
export default {
  name: '',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
    },
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