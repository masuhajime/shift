<template>
  <div class="container">
    <section>
      <button v-on:click="addStaff('nameaaa')">スタッフの追加</button>
    </section>
    <section>
      <ul>
        <li v-for="staff in staffs" :key="staff.id">
          {{ staff.name }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navigation from '~/components/Navigation.vue'
import { staffStore } from '~/store'

export default Vue.extend({
  layout: 'staff',
  components: {
    Navigation
  },
  computed: {
    staffs: () => {
      return staffStore.staffs
    }
  },
  methods: {
    addStaff: (name: string) => {
      staffStore.addStaff(name)
    }
  }
})
</script>

<style scoped>
.container {
  margin: 0 auto;
  background-color: #e0e0e0;
  min-height: 100vh;
}
</style>
