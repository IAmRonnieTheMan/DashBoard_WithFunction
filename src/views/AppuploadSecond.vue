<template>
  <div class="uploadfunc">
    <!-- enctype表示表單中包含文件數據,通常用於上傳文件 -->
    <!-- @submit.prevent="uploadFile是vue的語法,把原本默認的提交行為調用為uploadfile的方式處理邏輯 -->
    <form id="upload_form" enctype="multipart/form-data" @submit.prevent="uploadFile">
        <div class="inputblock">
          <input type="file" name="file1" ref="fileInput" @change="uploadFile">
          {{ "drag file " }}
        </div>
      
        <progress id="progressBar" :value="progress" max="100"></progress>
      
      <div class="block123">
        <h3 id="status">{{ status }}</h3>
        <p id="loaded_n_total">{{ loaded }} bytes of {{ total }}</p>
        <p>use time:{{ totaltime }}sec</p>
        <p>speed:{{ speed }}MB/s</p>
      </div>

    </form>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      progress: 0,
      status: '',
      loaded: 0,
      total: 0,
      totaltime:'',
      startTime:'',
      endTime:'',
      speed:''
    };
  },
  methods: {
    uploadFile() {
      this.startTime= performance.now();
      const file = this.$refs.fileInput.files[0];
      //表單數據,創建後搭配ajax或其他方式上傳
      const formdata = new FormData();
      formdata.append("file1", file);
      //ajax是一種頁面不重新加載的情況下,通過後台伺服器進行少量數據交換來更新部份頁面,這種技術通過在後台發送http請求,接受響應並更新頁面內容
      const ajax = new XMLHttpRequest();
      //當過程中觸發自訂註冊的progress事件時,調用名為progressHandler的回掉函數（可以在事件發生时值行特定的邏輯）來處理上傳進度的更新
      //false代表事件監聽將在upload事件啟動後執行,啟動前不執行
      //ajax.upload為XMLHttpRequest對象上傳事件,當上傳的進度值不斷更新,監聽事件也同時抓取資料進行更新
      ajax.upload.addEventListener("progress", this.progressHandler, false);
      ajax.addEventListener("load", this.completeHandler, false);
      ajax.addEventListener("error", this.errorHandler, false);
      ajax.addEventListener("abort", this.abortHandler, false);
      //把資料上傳至http://localhost:3000/upload
      //ajax.open是XMLHttpRequest對象的方法,它接受三個值:html方法,URL,是否異步發送請求的布林值
      ajax.open("POST", "http://localhost:3000/upload");//endpoint
      //將formdata發送到伺服器
      ajax.send(formdata);
    },
    progressHandler(event) 
    {
      this.loaded = event.loaded;
      this.total = event.total;
      const percent = (event.loaded / event.total) * 100;
      this.progress = Math.round(percent);
      this.status = `${Math.round(percent)}% uploaded... please wait`;
      
      this.endTime=performance.now();
      this.totaltime = (this.endTime-this.startTime)/1000;
      const bytes = this.total/(1024*1024)
      const speedtest = bytes/this.totaltime
      this.speed=speedtest.toFixed(3)
    },
    completeHandler(event) {
      this.status = event.target.responseText;
      this.progress = 0; 
    },
    errorHandler(event) {
      this.status = "Upload Failed";
    },
    abortHandler(event) {
      this.status = "Upload Aborted";
    },

    
  }
};
</script>
  <style>
 @import '@/assets/css/upload.css';
 </style>
  