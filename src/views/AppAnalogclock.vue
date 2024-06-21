<template>
  <div class="clock">
    <figure class="analog-clock"> <!-- figure標籤為容量標籤,用於包裹圖像、圖表、照片 -->
      <figcaption class="analog-clock__face"> <!-- figure會包含一個figcaption -->
        <!-- 1.生成60個刻度, long為每五個刻度一個長刻度 -->
        <!-- 2.當n為5的倍數時添加到-long 的class中 -->
        <!-- 3. ＄後面通常是vue.js內置屬性和方法 -->
        <span v-for="n in 60" 
          :key="n"
          class="analog-clock__notch"
          :class="{ '-long': !(n % 5) }"
          :style="{ transform: `rotate(${n * 6}deg)` }">
        </span>
      </figcaption>
  
      <span class="analog-clock__hand -seconds" :style="secondsStyle"></span>
      <span class="analog-clock__hand -minutes" :style="minutesStyle"></span>
      <span class="analog-clock__hand -hours" :style="hoursStyle"></span>
    </figure>
  </div>
  </template>
  
  <script>
  export default {
    props: { minute: Number, tick: Number },
   //  把秒、分、時針全部調到相同位置
    computed: {
      secondsStyle() {
        return { transform: `translate3d(-50%, 0, 0) rotate(${this.rotation.seconds}deg)` }
      },
      minutesStyle() {
        return { transform: `translate3d(-50%, 0, 0) rotate(${this.rotation.minutes}deg)` }
      },
      hoursStyle() {
        return { transform: `translate3d(-50%, 0, 0) rotate(${this.rotation.hours}deg)` }
      }
    },
    data() {
      return {
        rotation: { hours: 0, minutes: 0, seconds: 0 }
      }
    },
    watch: {
      tick() {
        this.rotation.seconds += 6 //360度/60秒
        this.rotation.minutes += 0.1 //360度/3600秒
      },
      minute(to, from) { //to為新數據, from為舊數據
        if (from === to) return; //如果舊數據=新數據的話直接返回值
        this.rotation.hours += 0.5 //30度/60分鐘
      }
    },
    mounted() {
      this.updateRotation()
    },
    methods: {
      updateRotation() {
        let date = new Date()
        let [h, m, s] = [date.getHours(), date.getMinutes(), date.getSeconds()]
        this.rotation = {
          hours: (h % 12) * 30 + (m / 2),
          minutes: m * 6 + (s / 10),
          seconds: s * 6
        }
  
        setTimeout(() => {
          this.updateRotation()
        }, 1000) //每隔一秒鐘更新一次updateRotation
      }
    }
  }
  </script>
  
  <style scoped>
  @import"@/assets/css/analogclock.css"
  </style>
  