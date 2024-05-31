<template>
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
  .analog-clock {
    top: 50%;
    right: 50%;
    width: 50vh;
    height: 50vh;
    position: absolute;
    border-radius: 100%;
    background-color: white;
    transform: translate3d(-1.5rem, -50%, 0);
    filter: drop-shadow(0 0.125rem 0.5rem rgba(black, 0.1));
  }
  
  /* 鐘的中心點 */
  .analog-clock::after {
    top: 50%;
    left: 50%;
    content: '';
    width: 2.5%;
    height: 2.5%;
    position: absolute;
    border-radius: 100%;
    background-color: #edbec5;
    transform: translate3d(-50%, -50%, 0);
  }
  
  .analog-clock__face {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  /* 時鐘上短的刻度線 */
  .analog-clock__notch {
    transform-origin: 50% 100%;
    position: absolute;
    width: 1px;
    height: 49%;
    bottom: 50%;
    left: 50%;
  }
  
  .analog-clock__notch::after {
    content: '';
    width: 100%;
    height: 2.5%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #b6c3c9;
  }
  
  .analog-clock__notch.-long::after {
    width: 2px;
    height: 7.5%;
  }
  
  .analog-clock__hand {
    transform-origin: 50% 100%;
    background-color: #7392a0;
    position: absolute;
    width: 2px;
    height: 40%;
    bottom: 50%;
    left: 50%;
    border-radius: 2px;
    transition: transform 1s linear;
  }
  
  .analog-clock__hand::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 10%;
    background-color: inherit; /*繼承父屬性 */
    backface-visibility: hidden;
  }
  
  .analog-clock__hand.-hours {
    height: calc(100% / 3);
    width: 3px;
    border-radius: 3px;
    transition: transform 60s linear;
  }
  
  .analog-clock__hand.-seconds {
    width: 1.5px;
    height: 45%;
    border-radius: 0;
    background-color: #edbec5;
    transition: transform 100ms cubic-bezier(.6, .05, 0, 1.6);
  }
  
  .analog-clock__hand.-seconds::after {
    height: 12.5%;
  }
  </style>
  