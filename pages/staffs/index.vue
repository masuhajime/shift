<template>
  <div class="container">
    <div>
      <navigation />
      staff
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Your from '~/components/Your.vue'
import Calender from '~/components/Calender.vue'
import Navigation from '~/components/Navigation.vue'

export default Vue.extend({
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
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #e0e0e0;
}
</style>
