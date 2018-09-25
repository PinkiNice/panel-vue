<template lang="pug">
  <div id="app">
    <Header />
    .padding-5
      <Dashboard />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Dashboard from './views/Dashboard.vue';

export default {
  name: 'app',
  components: {
    Dashboard,
    Header
  }
}
</script>

<style lang="scss">
@import 'styles/style.scss';

</style>
