<template>
  <div class="container">
    <div class="header">
      <navigation />
    </div>
    <div class="content">
      <div class="container">
        <div class="header">
          <button>
            <nuxt-link to="/staffs">
              スタッフ一覧
            </nuxt-link>
          </button>
          <button>
            <nuxt-link to="/staffs/group">
              グループ管理
            </nuxt-link>
          </button>
          <button>
            <nuxt-link to="/staffs/shift">
              シフトパターン
            </nuxt-link>
          </button>
        </div>
        <div class="content">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
*,
*:before,
*:after {
  margin: 0;
}
</style>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.header {
  background-color: #e8e8e8;
  padding: 8px;
}
</style>

<script>
import Vue from 'vue'
import Navigation from '~/components/Navigation.vue'

export default Vue.extend({
  components: {
    Navigation
  }
})
</script>
