<template>
  <div class="container">
    <div>
      <!-- <your first-name="asdf" :user="user" /> -->
      <calender />
    </div>
  </div>
</template>

<script>
import Your from '~/components/Your.vue'
import Calender from '~/components/Calender.vue'

export default {
  components: {
    Your,
    Calender
  },
  data () {
    return {
      user: {
        name: 'NAME1'
      }
    }
  }
}
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
