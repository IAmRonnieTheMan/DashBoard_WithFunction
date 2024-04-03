<template>
    <!-- 下載區塊容器 -->
    <div class="downloadblock" ref="downloadblock">
        <!-- 載入圖示容器 -->
        <div class="loadingcircle">
            <!-- 按鈕點擊後觸發圖片下載 -->
            <button class="downloadnumber" @click="imageclick">
                download image
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    methods: {
        // 當圖片按鈕被點擊時觸發的方法
        imageclick() {
            // 使用 Axios 取得圖片
            axios({
                url: "/customer01.jpeg", // 圖片 URL
                method: "GET", // HTTP 方法
                responseType: 'blob' // 回應類型為 Blob
            }).then((response) => {
                // 創建下載圖片 Blob 的 URL
                var fileUrl = window.URL.createObjectURL(new Blob([response.data]));
                // 創建觸發下載的連結元素
                var fileLink = document.createElement('a');
                fileLink.href = fileUrl; // 將 href 屬性設置為圖片 URL
                fileLink.setAttribute('download', 'image.jpeg'); // 設置 download 屬性以指定檔案名稱
                
                // 將下載連結添加到 loadingcircle 元素中
                this.$refs.downloadblock.querySelector('.loadingcircle').appendChild(fileLink);
                
                // 程式化觸發點擊事件以開始下載
                fileLink.click();
            }).catch(error => {
                console.error('下载图片时出错:', error); // 記錄圖片下載過程中的任何錯誤
            });
        }
    }
}
</script>
