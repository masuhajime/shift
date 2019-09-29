<template>
  <div class="container">
    <section>
      <AddGroup @add="addGroup" />
    </section>
    <section>
      <h2>グループ一覧</h2>
      <ul>
        <li v-for="group in groups" :key="group.id">
          <nuxt-link :to="'/groups/' +group.id">
          {{ group.name }}
          </nuxt-link>
           : {{ group.id }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Your from '~/components/Your.vue'
import Calender from '~/components/Calender.vue'
import Navigation from '~/components/Navigation.vue'
import AddGroup, { AddGroupEvent } from '~/components/forms/FormAddGroup.vue'
import { staffStore } from '~/store'

export default Vue.extend({
  layout: 'staff',
  components: {
    Navigation,
    AddGroup
  },
  computed: {
    groups: () => {
      return staffStore.groups
    }
  },
  methods: {
    addGroup: (event: AddGroupEvent) => {
      staffStore.addGroup(event.name)
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
