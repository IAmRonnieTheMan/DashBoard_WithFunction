<template> 
    <div>
      <router-link to="#"><button class="btn" @click="zoomupevent" :class="{active:zoomupactive}">View All</button></router-link>  
      <div class="gg">123123</div>
    </div>
  </template>
  
<script>
export default{
    data(){
        return{
            zoomupactive:false
        }
    },
    methods:{
        zoomupevent(){
            this.zoomupactive=true
            console.log('12123')
        }
}
}

</script>

<style>
@import '@/assets/css/order.css';
</style>