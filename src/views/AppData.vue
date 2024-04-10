<template>
    <div>
      <h1>第一筆資料如下：</h1>
      <ul class="datalist">
        <li v-for="hotel in hotels" :key="hotel.seq">
          類別: {{ hotel.類別 }}，旅宿名稱: {{ hotel.旅宿名稱 }}
        </li>
      </ul>
      <h1>第二筆資料如下：</h1>
      <pre v-if="externalData">
        <!-- <pre v-if="externalData">{{ JSON.stringify(externalData, null, 1) }}</pre> -->
        <div v-for="(item, index) in externalData" :key="index">
          學年度: {{ item.學年度 }}, 學校代碼: {{ item.學校代碼 }}, 學校名稱: {{ item.學校名稱 }}
        </div>
      </pre>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        hotels: [],
        externalData: null
      };
    },
  
    mounted() {
      this.fetchHotelsData();
      this.fetchExternalData();
    },
  
    methods: {
      fetchHotelsData() {
        fetch('https://api.kcg.gov.tw/api/service/Get/8ed53368-e292-4e2a-80a7-434cf497220c')
          .then(response => response.json())
          .then(data => {
            this.hotels = data.data;
          })
          .catch(error => console.error("Fetching hotels data error:", error));
      },
  
      
      async fetchExternalData() {
        try {
          const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
          const targetUrl = 'https://stats.moe.gov.tw/files/detail/110/110_graduate.json';
  
          const response = await fetch(corsProxyUrl + targetUrl, {
            headers: {
              'Origin': 'http://localhost:8080'
            }
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          this.externalData = data;
        } 
          catch (error) {
            console.error(error);
          }
      }
    }
  }
  </script>
  