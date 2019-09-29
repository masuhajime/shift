<template>
  <div class="container">
    <section v-if="!existGroup">
      not exist
    </section>
    <section v-if="existGroup">
      aaaa: {{ group.name }}
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { staffStore } from '~/store'

export default Vue.extend({
  layout: 'staff',
  components: {

  },
  data() {
    return {
      existGroup: false,
      group: {},
      id: this.$route.params.id
    };
  },
  beforeMount() {
    const group = staffStore.findGroupById(this.$route.params.id);
    if (group) {this.group = group; this.existGroup = true}
    console.log("beforeMount", group);
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
