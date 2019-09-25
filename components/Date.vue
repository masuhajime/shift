<template>
  <div
    class="container"
    :class="{ thin:thin }"
  >
    <div class="header">
      <span
        :class="{ header_holiday:isHoliday }"
      >
        {{ month }}/{{ day.date() }}({{ dayOf }})
      </span>
    </div>
    <div class="content">
      シフト
    </div>
  </div>
</template>

<style scoped>
.container {
  width: calc(14.2857% - 2px);
  background: #ffffff;
  display: flex;
  flex-direction: column;
  margin: 1px;
  padding: 0;
}
.thin {
  background: #f0f0f0;
}
.header {
  flex: 24px;
  background-color: #f8f8f8;
  padding: 8px;
  margin: 0;
  font-weight: bold;
}
.thin .header {
  background: #f0f0f0;
}
.header_holiday {
  color: red;
}
.content {
  flex: 1;
  padding: 8px;
  margin: 0;
}
</style>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'

const days = ['日', '月', '火', '水', '木', '金', '土']

export default Vue.extend({

  props: {
    day: {
      type: dayjs,
      required: true
    },
    thin: {
      default: false,
      required: false
    }
  },

  data () {
    return {
    }
  },

  computed: {
    month () {
      return this.day.month() + 1
    },
    dayOf () {
      return days[this.day.day()]
    },
    isHoliday () {
      const day = this.day.day()
      return day === 0 || day === 6
    }
  }
})
</script>
