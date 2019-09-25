
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

<style lang="scss" scoped>
nav {
    display: flex;
}
nav > button {
    margin-left: 8px;
    padding: 8px 16px;
    background-color: #f0f0f0;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 3px;
    &:hover {
        background-color: #e8e8e8;
    }
}
</style>
