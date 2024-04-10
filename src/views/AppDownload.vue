<template>
  <div class="downloadblock" ref="downloadblock">
    <div class="loadingcircle">
      <button class="downloadbutton" @click="imageclick" :class="{ active: isButtonActive }">
        download image
  <div class="progress-wrapper">
    <div class="inner"></div>
    <div class="circle">
      <div class="bar left">
        <div class="progress"></div>
      </div>
      
      <div class="bar right">
        <div class="progress"></div>
      </div>
    </div>
  </div>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isButtonActive: false
    };
  },
  methods: {
    imageclick() {
      axios({
        url: "/customer01.jpeg",
        method: "GET",
        responseType: 'blob'
      }).then((response) => {
        var fileUrl = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement('a');
        fileLink.href = fileUrl;
        fileLink.setAttribute('download', 'image.jpeg');
        this.$refs.downloadblock.querySelector('.loadingcircle').appendChild(fileLink);
        fileLink.click();
        this.isButtonActive = true;
      }).catch(error => {
        console.error('下载图片时出错:', error);
      });
    }
  }
}
</script>

<style scoped>
  .downloadnumber.active {
    /* Your active button styles here */
  }
</style>
