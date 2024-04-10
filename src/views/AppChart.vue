<template>
    <div class="chartblock">
        <div class="barchart">
            <Doughnut :data="dataName"></Doughnut>
        </div>
    </div>
</template>
<script>
import {Doughnut} from 'vue-chartjs'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default{
    components:{Doughnut},
    data(){
        return{
            dataName:{
           labels:['chris','david','angel'],
           datasets:[{data:[80,50,30]}]
        },
        }
    }
}
</script>