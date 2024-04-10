<template>
  <div class="chartblock">
    <div class="barchart" v-if="hotels.length > 0">
      <Doughnut :data="chartData"></Doughnut>
    </div>
    <!-- <div class="buttonchangedata">
      <button type="button" class="changedatabutton" @click="updatelistdata">
        clickme
      </button>
    </div> -->
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import AppData from './AppData.vue'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  components: { Doughnut, AppData },
  data() {
    return {
      chartData: {
        labels: [], // 初始化為空
        datasets: [{
          data: [], // 初始化為空
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Example colors
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] // Example hover colors
        }]
      },
      hotels: []
    }
  },
  mounted() {
    this.fetchHotelsData()
  },
  methods: {
    fetchHotelsData() {
      fetch('https://api.kcg.gov.tw/api/service/Get/8ed53368-e292-4e2a-80a7-434cf497220c')
        .then(response => response.json())
        .then(data => {
          this.hotels = data.data;
          const slicedData = this.hotels.slice(0, 5); // 使用 this.hotels 進行切片
          // 更新 chartData
          this.chartData.labels = slicedData.map(hotel => hotel.旅宿名稱); 
          this.chartData.datasets[0].data = slicedData.map(hotel => hotel.郵遞區號); 
        })
        .catch(error => console.error("獲取旅館資料時出錯：", error));
    },

    // updatelistdata() {
    //   const nextIndex = this.chartData.labels.length + 5; // 計算下一組資料的起始索引
    //   if (nextIndex < this.hotels.length) {
    //     const slicedData = this.hotels.slice(nextIndex, nextIndex + 5); // 更新後五筆資料
    //     this.chartData.labels = slicedData.map(hotel => hotel.旅宿名稱); 
    //     this.chartData.datasets[0].data = slicedData.map(hotel => hotel.郵遞區號);
    //     console.log("換");
    //   } else {
    //     console.log("已經顯示所有資料。"); // 若已顯示完畢，則在控制台顯示訊息
    //   }
    // }
  }
}
</script>
