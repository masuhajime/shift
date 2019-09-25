<template>
  <div>
    Calender
    <div>年: {{ year }}</div>
    <div>月: {{ month + 1 }}</div>

    <div :class="$style.container">
      <template v-for="(day, index) in days">
        <date :key="index" :day="day" />
      </template>
    </div>
  </div>
</template>

<style module>
.container {
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
}
</style>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'
import Date from './Date.vue'

export default Vue.extend({
  components: {
    Date
  },

  props: {
  },

  data () {
    const now = dayjs('2019-09')
    const daysInMonth = now.daysInMonth()

    const days = []
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(dayjs().year(now.year()).month(now.month()).date(i))
    }

    // 日曜日を左端に合わせる為に前後の日時を追加する
    const firstDay = days[0];
    for (let i = 0; i < firstDay.day(); i++) {
      days.unshift(firstDay.clone().add(-(i + 1), 'day'));
    }
    const lastDay = days[days.length - 1];
    for (let i = 0; i < (6 - lastDay.day()); i++) {
      days.push(lastDay.clone().add(i + 1, 'day'));
    }

    return {
      year: now.year(),
      month: now.month(),
      days
    }
  },

  computed: {
  }
})
</script>
