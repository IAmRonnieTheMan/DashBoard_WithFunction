<template>
  <div>
    <!-- 上傳照片的 input --> <!--當用於監聽表單元素的值改變時觸發change事件--> <!--image/*限定只能上傳image-->
    <input type="file" @change="handlePhotoUpload" accept="image/*" class="imgbutton">
    
    <!-- 上傳文件的 input -->
    <input type="file" @change="handleFileUpload" class="filebutton">

    <!-- 顯示上傳和下载的進度條 -->
    <div v-if="uploadProgress !== null">
      <p>上傳進度: {{ uploadProgress }}%</p>
      <progress :value="uploadProgress" max="100"></progress>
    </div>

    <!--progress為顯示進度條,利用value綁定下載值並即時渲染-->
    <div v-if="downloadProgress !== null">
      <p>下载進度: {{ downloadProgress }}%</p>
      <progress :value="downloadProgress" max="100"></progress>
    </div>
  
    <!-- 顯示上傳的照片 --> 
    <img v-if="uploadedPhoto" :src="uploadedPhoto" alt="Uploaded Photo" class="imgstyle">
  
    <!-- 顯示上傳的文件練接 -->
    <a v-if="uploadedFileUrl" :href="uploadedFileUrl" class="filebutton" :download="uploadedFileName">download</a>
  </div>
</template>

<script>
// ref用法為Composition API寫法
// 可以將普通的JS值轉換為響應式變量,透過ref返回對象,當變量值發生變化時,vue會自動從渲染
import { ref } from 'vue';

export default {
  // 把一開始的值全設為空值,當有變化時做即時渲染
  // 如果是Options API, 寫法為 data(){return{uploadedPhoto:null.....}}
  setup() {
    // 存储上傳的照片
    const uploadedPhoto = ref(null);
    // 存储上傳的文件對象
    const uploadedFile = ref(null);
    // 存储上傳的文件 URL
    const uploadedFileUrl = ref(null);
    // 存储上傳的文件名
    const uploadedFileName = ref(null);
    // 存储上傳和下载的進度
    const uploadProgress = ref(null);
    const downloadProgress = ref(null);

    // 處理上传照片 
    //此為Composition API寫法,Options API寫法為methods
    const handlePhotoUpload = (event) => {  //使用箭頭語法定義的函釋,接收一個事件作為參數
      const file = event.target.files[0]; //獲取第一個文件
      if (file) {
        // 使用URL.createObjectURL創建臨時的URL使頁面可以引用渲染
        uploadedPhoto.value = URL.createObjectURL(file);
      }
    };

    // 處理上傳文件
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        // 存储上傳的文件對象
        uploadedFile.value = file;
        // 存储上傳的文件名
        uploadedFileName.value = file.name;

        const formData = new FormData();
        formData.append("file1", file);

        const ajax = new XMLHttpRequest();
        ajax.upload.addEventListener("progress", (e) => {
          // 更新上传进度
          uploadProgress.value = Math.round((e.loaded / e.total) * 100);
        });
        ajax.addEventListener("load", (e) => {
          // 更新上传进度
          uploadProgress.value = 100;
          // 使用 URL.createObjectURL 创建一个临时的 URL
          uploadedFileUrl.value = URL.createObjectURL(file);
        });
        ajax.open("POST", "http://localhost:3000/upload");
        ajax.send(formData);
      }
    };

    return {
      uploadedPhoto,
      uploadedFile,
      uploadedFileUrl,
      uploadedFileName,
      uploadProgress,
      downloadProgress,
      handlePhotoUpload,
      handleFileUpload
    };
  }
}
</script>
