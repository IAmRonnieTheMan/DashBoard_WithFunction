<template>
    <div class="barblock">
      <button class="press" @click="startbar">download</button>
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
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        progress: 0, //重整頁面後進度條回歸0
        totalSize: '',
        time: '',
        speed: '',
      }
    },
  
    methods: {
      startbar() {
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
  
          var newURL = window.URL.createObjectURL(new Blob([response.data])); //新增一新連結並把axios獲取的資料封裝成blob
          var newLink = document.createElement('a'); //必須為a因為<a>為創建連結元素
          newLink.href = newURL;
          newLink.setAttribute('download', 'patrick.jpg');
          newLink.click(); //模擬用戶點擊觸發下載
  
         
          this.progress = 100;
          this.totalSize = totalSizeMB.toFixed(5); 
          this.time = totalTime.toFixed(2); 
          this.speed = downloadSpeed.toFixed(2); 
        });
      }
    }
  }
  </script>
  
  <style>
  @import '@/assets/css/progressbar.css';
  </style>
  