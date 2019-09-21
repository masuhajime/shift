<template>
  <div>
    {{ message }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface User {
  name: String;
}

export default Vue.extend({
  props: {
    user: {
      type: Object,
      required: true
    } as PropOptions<User>
  },
  data () {
    const message: string = 'This is a message'

    return {
      message
    }
  }
})
</script>
