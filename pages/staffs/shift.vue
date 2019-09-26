<template>
  <div class="container">
    shift
  </div>
</template>

<script>
import Vue from 'vue'
import Your from '~/components/Your.vue'
import Calender from '~/components/Calender.vue'
import Navigation from '~/components/Navigation.vue'

export default Vue.extend({
  layout: 'staff',
  components: {
    Your,
    Calender,
    Navigation
  },
  data () {
    return {
      user: {
        name: 'NAME1'
      }
    }
  }
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #e0e0e0;
  min-height: 100vh;
}
</style>
