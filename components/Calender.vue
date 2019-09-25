<template>
  <div>
    Calender
    <div>年: {{ year }}</div>
    <div>月: {{ month + 1 }}</div>

    <div :class="$style.container">
      <template v-for="(day, index) in days">
        <date :key="index" :day="day.day" :thin="day.thin" />
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

interface Day {
  day: dayjs.Dayjs;
  thin?: boolean;
}

export default Vue.extend({
  components: {
    Date
  },

  props: {
  },

  data () {
    const now = dayjs('2019-06')
    const daysInMonth = now.daysInMonth()

    const days: Day[] = []
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: dayjs().year(now.year()).month(now.month()).date(i)
      })
    }

    // 日曜日を左端に合わせる為に前後の日時を追加する
    const firstDay = days[0].day
    for (let i = 0; i < firstDay.day(); i++) {
      days.unshift(
        {
          day: firstDay.clone().add(-(i + 1), 'day'),
          thin: true
        }
      )
    }
    const lastDay = days[days.length - 1].day
    for (let i = 0; i < (6 - lastDay.day()); i++) {
      days.push({
        day: lastDay.clone().add(i + 1, 'day'),
        thin: true
      })
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
