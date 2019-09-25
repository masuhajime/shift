<template>
  <div class="container">
    <div>
      <navigation />
      settings
      <button @click="onClick">
        click
      </button>
      <div v-for="post in posts" :key="post.id">
        {{ post }}
      </div>
      <p>{{counter }}</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Your from '~/components/Your.vue'
import Calender from '~/components/Calender.vue'
import Navigation from '~/components/Navigation.vue'
import { feedStore, countStore } from '~/store'

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
  },
  computed: {
    counter: () => {
      return countStore.count// exampleStore.count;
    },
    posts () {
      return feedStore.posts
    }
  },
  created () {
    console.log('created()')

    // feedStore.loadPosts()
  },
  mounted () {
    console.log('mounted()')
    //feedStore.loadPosts()
  },
  methods: {
    onClick (event) {
      console.log("onClick");
      countStore.add()
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
