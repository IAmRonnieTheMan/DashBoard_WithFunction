<template>
  <div class="barblock">
    <div>
      <div class="wordsblock">
        <button class="press" @click="startbar">download</button>
        <div class="datawords">download pictures</div>
      </div>
      <div class="loadbar">
        <div class="loadrunbar" :style="{ width: progress + '%' }"></div> <!--％不能省略 -->
      </div>
      <div class="dataarea">
        <div class="datacard">
          <p class="datahead">size:</p>
          <p class="databody">{{ totalSize }} MB</p>
        </div>
        <div class="datacard">
          <p class="datahead">time:</p>
          <p class="databody">{{ time }} 秒</p>
        </div>
        <div class="datacard">
          <p class="datahead">speed:</p>
          <p class="databody">{{ speed }} MB/s</p>
        </div>
      </div>
    </div>
    <AppDocx></AppDocx>
      <Bar :data="chartData" class="barchart" v-if="newURL"></Bar>
      <Line :data="chartData" class="linechart" v-if="newURL"></Line>
      <Pie :data="chartDataTwo" class="piechart" v-if="newURL"></Pie>
  </div>
  <div class="showarea" v-if="newURL">
    <p class="picwords">{{ "picture is ready in download file" }}</p>
    <img :src="newURL" v-if="newURL">
  </div>
  </template>
    
    <script>
    import axios from 'axios';
    import AppDocx from '@/views/AppDocx.vue';
    import {Bar} from 'vue-chartjs';
    import {Line} from 'vue-chartjs';
    import {Pie} from 'vue-chartjs';
    import {Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement,}from 'chart.js';
    ChartJS.register( Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement);
    export default {
      components:{
        AppDocx,Bar,Line,Pie
      },
      data() {
        return {
          progress: 0, //重整頁面後進度條回歸0
          totalSize: '',
          time: '',
          speed: '',
          newURL:'',
  
          chartData:{
            labels:['size','time','speed'],
            datasets:[{
              data:[],
              label:'download data',
          }]
          },

          chartDataTwo:{
            labels:['size','time','speed'],
            datasets:[{
              data:[],
              label:'download data',
          }]
          },
          
        }
      },
      methods: {
        startbar() {
          this.progress=0;
          this.newURL='';
          const startTime = performance.now(); //計算開始下載的時間
          axios.get('/123.jpg', {
            responseType: 'blob', //利用http方法取得照片變轉換為除存二進制的格式
            onDownloadProgress: progressEvent => {
              this.progress = ((progressEvent.loaded * 100) / progressEvent.total);//Math.round適用於四捨五入的,在這邊可不加
            }
          }).then(response => {
            const endTime = performance.now(); 
            const totalTime = (endTime - startTime) / 1000; //以秒為單位
  
            const totalSizeBytes = response.data.size;  //獲取資料大小
            const totalSizeMB = totalSizeBytes / (1024 * 1024); //轉換以MB為單位
    
            const downloadSpeed = totalSizeMB / totalTime; //此為計算每秒下載量
    
            this.newURL = window.URL.createObjectURL(new Blob([response.data])); //新增一新連結並把axios獲取的資料封裝成blob
            var newLink = document.createElement('a'); //必須為a因為<a>為創建連結元素
            newLink.href = this.newURL;
            newLink.setAttribute('download', 'patrick.jpg');
            newLink.click(); //模擬用戶點擊觸發下載
    
           
            this.progress = 100;
            this.totalSize = totalSizeMB.toFixed(5); 
            this.time = totalTime.toFixed(2); 
            this.speed = downloadSpeed.toFixed(2); 
  
            this.chartData={
              labels:['size','time','speed'],
              datasets:[{
              data:[
                parseFloat(this.totalSize),
                parseFloat(this.time),
                parseFloat(this.speed)
              ],
              label:'download picture data',
              backgroundColor:'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 3, //bar條的border
              }],
            }
          console.log(this.totalSize, this.time, this.speed);
            

          this.chartDataTwo={
            labels:['size','time','speed'],//labels的顏色是根據下面的backgorundcolor設定
            datasets:[{
              data:[
                parseFloat(this.totalSize),
                parseFloat(this.time),
                parseFloat(this.speed),
              ],
              label:'PieChartData',
              backgroundColor:['lightblue','lightgreen','rgba(71, 188, 185, 0.2)'],
              borderColor: 'black',
              borderWidth: 3, //bar條的border
            }]
          }
          });
        }
      }
    }
    </script>
    
    <style>
    @import '@/assets/css/progressbar.css';
    </style>
    