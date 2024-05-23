<template>
    <div class="barblock">
      <div>
        <div class="wordsblock">
          <button class="press" @click="startbar">download</button>
          <div class="datawords">download pictures</div>
        </div>
        <div class="loadbar">
          <div class="loadrunbar" :style="{ width: progress + '%' }"></div>
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
      <Bar :data="chartData" :options="chartOptions" class="barchart" />
    </div>
    <div class="showarea">
      <p v-if="newURL" class="picwords">{{ "picture is ready in download file" }}</p>
      <img :src="newURL" v-if="newURL">
    </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
  import axios from 'axios';
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
  export default {
    components: {
      Bar
    },
    data() {
      return {
        progress: 0,
        totalSize: '',
        time: '',
        speed: '',
        newURL: '',
        chartData: {
          labels: ['size', 'time', 'hey'],
          datasets: [{
            data: [],
            label: 'dataview',
          }]
        },
        chartOptions: {
          responsive: true
        },
      }
    },
    methods: {
      startbar() {
        this.progress = 0;
        this.newURL = '';
        const startTime = performance.now();
        axios.get('/123.jpg', {
          responseType: 'blob',
          onDownloadProgress: progressEvent => {
            this.progress = ((progressEvent.loaded * 100) / progressEvent.total);
          }
        }).then(response => {
          const endTime = performance.now();
          const totalTime = (endTime - startTime) / 1000;
          const totalSizeBytes = response.data.size;
          const totalSizeMB = totalSizeBytes / (1024 * 1024);
          const downloadSpeed = totalSizeMB / totalTime;
          this.newURL = window.URL.createObjectURL(new Blob([response.data]));
          var newLink = document.createElement('a');
          newLink.href = this.newURL;
          newLink.setAttribute('download', 'patrick.jpg');
          newLink.click();
          this.progress = 100;
          this.totalSize = totalSizeMB.toFixed(5);
          this.time = totalTime.toFixed(2);
          this.speed = downloadSpeed.toFixed(2);
          // Update chart data
          this.chartData.datasets[0].data = [this.totalSize, this.time,this.speed];
        }).catch(error => {
          console.error('Error downloading image:', error);
          // Handle error here
        });
      }
    }
  }
  </script>
  
  <style>
  @import '@/assets/css/progressbar.css';
  </style>
  