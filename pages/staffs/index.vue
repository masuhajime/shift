<template>
  <div class="container">
    <section>
      <AddStaff @add="addStaff" />
    </section>
    <section>
      <h2>スタッフ一覧</h2>
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
import AddStaff, { AddStaffEvent } from '~/components/forms/FormAddStaff.vue'
import { staffStore } from '~/store'

export default Vue.extend({
  layout: 'staff',
  components: {
    Navigation,
    AddStaff
  },
  computed: {
    staffs: () => {
      return staffStore.staffs
    }
  },
  methods: {
    addStaff: (event: AddStaffEvent) => {
      staffStore.addStaff(event.name)
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
