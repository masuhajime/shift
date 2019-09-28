<template>
  <section>
  <h2>グループ追加</h2>
  <form @submit.prevent="formSubmit">
    <div>
      名前: <input v-model="name" name="name" type="text">
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export interface AddGroupEvent {
  name: string;
}

export default Vue.extend({
  data: function() {
    return {
      name: ""
    }
  },
  methods: {
    formSubmit: function() {
      if (!this.name) {
        return;
      }
      this.$emit('add', <AddGroupEvent>{
        name: this.name,
      })
      this.name = '';
    }
  }
})
</script>

<style scoped>

</style>