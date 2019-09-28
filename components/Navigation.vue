
<template>
  <nav>
    <button>
      <nuxt-link to="/">
        勤怠表
      </nuxt-link>
    </button>
    <button>
      <nuxt-link to="/staffs">
        スタッフ
      </nuxt-link>
    </button>
    <button>
      <nuxt-link to="/settings">
        設定
      </nuxt-link>
    </button>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>

<style lang="scss" scoped>
nav {
    display: flex;
}
nav > button {
    margin-left: 8px;
    padding: 0;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 3px;
    &:hover {
      background-color: #e8e8e8;
    }
    a {
      display: block;
      text-decoration: none;
      color: #333;
      padding: 8px 16px;
    }
}
</style>
