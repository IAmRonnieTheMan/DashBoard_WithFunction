<template>
   <div>
                                                                                                                                         <!-- <h2>HTML5 File Upload Progress Bar Tutorial</h2> -->
     <!-- enctype表示表單中包含文件數據,通常用於上傳文件 -->
     <!-- @submit.prevent="uploadFile是vue的語法,把原本默認的提交行為調用為uploadfile的方式處理邏輯 -->
     <form id="upload_form" enctype="multipart/form-data" @submit.prevent="uploadFile">
       <input type="file" name="file1" ref="fileInput" @change="uploadFile"><br>
       <progress id="progressBar" :value="progress" max="100" style="width:300px;"></progress>
        <h3 id="status">{{ status }}</h3>
       <p id="loaded_n_total">{{ loaded }} bytes of {{ total }}</p>
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
       total: 0
     };
   },
   methods: {
     uploadFile() {
       const file = this.$refs.fileInput.files[0];
       const formdata = new FormData();
       formdata.append("file1", file);
      //  ajax是一種頁面不重新加載的情況下,通過後台伺服器進行少量數據交換來更新部份頁面,這種技術通過在後台發送http請求,接受響應並更新頁面內容
       const ajax = new XMLHttpRequest();
       //當過程中觸發progress事件時,恨調用名為progressHandler的回掉函數（可以在事件發生时值行特定的邏輯）來處理上傳進度的更新
       //false代表事件監聽將在事件補獲階段之後執行,而不是捕獲前執行
       ajax.upload.addEventListener("progress", this.progressHandler, false);
       ajax.addEventListener("load", this.completeHandler, false);
       ajax.addEventListener("error", this.errorHandler, false);
       ajax.addEventListener("abort", this.abortHandler, false);
       //把資料上傳至http://localhost:3000/upload
       ajax.open("POST", "http://localhost:3000/Recent");//endpoint
       ajax.send(formdata);
     },
     progressHandler(event) {
       this.loaded = event.loaded;
       this.total = event.total;
       const percent = (event.loaded / event.total) * 100;
       this.progress = Math.round(percent);
       this.status = `${Math.round(percent)}% uploaded... please wait`;
     },
     completeHandler(event) {
       this.status = event.target.responseText;
       this.progress = 0; // Clear progress bar after successful upload
     },
     errorHandler(event) {
       this.status = "Upload Failed";
     },
     abortHandler(event) {
       this.status = "Upload Aborted";
     }
   }
 };
 </script>
 