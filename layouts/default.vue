<template>
  <div class="container">
    <div class="header">
      <navigation />
    </div>
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<style>
*,
*:before,
*:after {
  margin: 0;
}
</style>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.header {
  background-color: #e8e8e8;
  padding: 8px;
}
</style>

<script>
import Vue from 'vue'
import Navigation from '~/components/Navigation.vue'

export default Vue.extend({
  components: {
    Navigation
  }
})
</script>
