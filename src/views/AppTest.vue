<template>
   <div>
     <h2>HTML5 File Upload Progress Bar Tutorial</h2>
     <form id="upload_form" enctype="multipart/form-data" @submit.prevent="uploadFile">
       <input type="file" name="file1" ref="fileInput" @change="uploadFile"><br>
       <progress id="progressBar" :value="progress" max="100" style="width:300px;"></progress>
       <h3 id="status">{{ status }}</h3>
       <p id="loaded_n_total">{{ loaded }} bytes of {{ total }}</p>
     </form>
   </div>

   <div>
      
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
       const ajax = new XMLHttpRequest();
       ajax.upload.addEventListener("progress", this.progressHandler, false);
       ajax.addEventListener("load", this.completeHandler, false);
       ajax.addEventListener("error", this.errorHandler, false);
       ajax.addEventListener("abort", this.abortHandler, false);
       ajax.open("POST", "http://localhost:3000/upload");// Replace with your upload endpoint
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
 