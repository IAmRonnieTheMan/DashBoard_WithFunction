<template>
    <div>
      <!-- 上传照片的 input -->
      <input type="file" @change="handlePhotoUpload" accept="image/*" class="imgbutton">
      
      <!-- 上传文件的 input -->
      <input type="file" @change="handleFileUpload" class="filebutton">
    
      <!-- 显示上传的照片 -->
      <img v-if="uploadedPhoto" :src="uploadedPhoto" alt="Uploaded Photo" class="imgstyle">
    
      <!-- 显示上传的文件链接 -->
      <a v-if="uploadedFileUrl" :href="uploadedFileUrl" class="filebutton" :download="uploadedFileName">download</a>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      // 存储上传的照片
      const uploadedPhoto = ref(null);
      // 存储上传的文件对象
      const uploadedFile = ref(null);
      // 存储上传的文件 URL
      const uploadedFileUrl = ref(null);
      // 存储上传的文件名
      const uploadedFileName = ref(null);
  
      // 处理上传照片
      const handlePhotoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          // 使用 URL.createObjectURL 创建一个临时的 URL
          uploadedPhoto.value = URL.createObjectURL(file);
        }
      };
  
      // 处理上传文件
      const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          // 存储上传的文件对象
          uploadedFile.value = file;
          // 存储上传的文件名
          uploadedFileName.value = file.name;
          // 使用 URL.createObjectURL 创建一个临时的 URL
          uploadedFileUrl.value = URL.createObjectURL(file);
  
          // 创建一个下载链接并触发下载
          const downloadLink = document.createElement('a');
          downloadLink.href = uploadedFileUrl.value;
          downloadLink.download = uploadedFileName.value;
          downloadLink.click();
        }
      };
  
      return {
        uploadedPhoto,
        uploadedFile,
        uploadedFileUrl,
        uploadedFileName,
        handlePhotoUpload,
        handleFileUpload
      };
    }
  }
  </script>
  