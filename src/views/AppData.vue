<template>

<div>
<h1>第一筆資料如下：</h1>
    <ul>
        <li v-for="hotel in hotels" :key="hotel.seq">
            類別: {{ hotel.類別 }}，星等: {{ hotel.星等 }}，旅宿名稱: {{ hotel.旅宿名稱 }}
        </li>
<h1>第二筆資料如下：</h1>
        <li v-for="school in schools" :key="school.seq">
            學年度:{{ school.學年度 }}, 學校代碼:{{ school.學校代碼 }}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            hotels: [],
            schools:[],
        };
    },

    mounted() {
        this.fetchHotelsData();
        this.fetchSchoolData()
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

        fetchSchoolData() {
            fetch('https://stats.moe.gov.tw/files/detail/110/110_graduate.json') //此網址非api無法取的資料
            .then(response => response.json())
            .then(data => {
            this.hotels = data.data;
            })

            .catch(error => console.error("Fetching hotels data error:", error));
        }
    }
}
</script>