<template>
<div class="chartbutton">
  <button @click="changeone" class="chartbut">10 in chart</button>
  <button @click="changetwo" class="chartbut">40 in chart</button>
  <button @click="changethree" class="chartbut">80 in chart</button>
</div>
<input v-model="number" type="number" class="chartinput" @keyup.enter="pressenter">
  <div class="chartblock">
    <div class="doughnutchart" v-if="hotels.length > 0">
      <Doughnut :data="chartData"></Doughnut>
    </div>
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
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], 
          hoverBackgroundColor: 'black',
        }]
      },
      hotels: [],
      number:''
    }
  },
  mounted() {
    this.fetchHotelsData()
  },
  methods: {
    fetchHotelsData() {
      fetch('https://api.kcg.gov.tw/api/service/Get/8ed53368-e292-4e2a-80a7-434cf497220c')
        .then(response => response.json()) //fetch返回一個promise（response）, response在利用response.json()將文檔變成json檔
        .then(data => { //data為json解析後的數據
          this.hotels=data.data //將解json析後的data屬性data賦值給hotels
          this.updateChartdata(5)
        })
        .catch(error => console.error("獲取旅館資料時出錯：", error));
    },

    //把資料變成十筆
    changeone(){
      this.updateChartdata(10)
    },

    changetwo(){
      this.updateChartdata(40)
    },

    changethree(){
      this.updateChartdata(80)
    },

    pressenter(){
      this.updateChartdata(parseInt(this.number))
    },

    //updateChartdata為函數,它接受一個參數slicecount
     updateChartdata(slicecount){
      const slicedData=this.hotels.slice(0,slicecount)//slice(start,end)                                                                                              
      this.chartData={
        labels:slicedData.map(hoteldata=>hoteldata.旅宿名稱), //剛剛slice後的資料賦值到slicedData中並且，hoteldata為當前遍歷到的元素, 而hoteldata.旅宿名稱為提取元素
        datasets:[{
          data:slicedData.map(hoteldata=>hoteldata.郵遞區號),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], 
          hoverBackgroundColor: 'black',
        }]
      }

    }
  }
}


// fetchHotelsData() {
//   fetch('https://api.kcg.gov.tw/api/service/Get/8ed53368-e292-4e2a-80a7-434cf497220c')
//     .then(response => response.json())
//     .then(data => {
//       this.hotels = data.data;
//       const slicedData = this.hotels.slice(0, 5); // 使用 this.hotels 進行切片
//       // 更新 chartData
//       this.chartData.labels = slicedData.map(hotel => hotel.旅宿名稱); 
//       this.chartData.datasets[0].data = slicedData.map(hotel => hotel.郵遞區號); 
//     })
//     .catch(error => console.error("獲取旅館資料時出錯：", error));
// },
</script>
