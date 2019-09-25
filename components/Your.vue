<template>
  <div>
    {{ fullName }}
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

interface User {
  name: String;
}

export default Vue.extend({
  name: 'YourComponent',

  props: {
    firstName: {
      type: String,
      required: true
    },
    user: {
      type: Object,
      required: true
    } as PropOptions<User>
  },

  data () {
    return {
      message: 'This is a message'
    }
  },

  computed: {
    fullName (): string {
      return `${this.firstName} ${this.user.name}`
    }
  }
})
</script>
