<template>

<body class="container">
    <AppSidebar></AppSidebar>
    <AppLogin></AppLogin>
    <div class="main">
      <AppHeader></AppHeader>
      <RouterView></RouterView>
    </div>

</body>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppSidebar from '@/components/AppSidebar.vue';
import AppDetails from '@/views/AppDetails.vue';
import AppLogin from '@/components/AppLogin.vue';
import { RouterView } from 'vue-router';


export default{
    components:{
        AppHeader,
        AppSidebar,
        AppDetails,
        AppLogin,
        
        }
}
</script>

<style> 
@import '@/assets/css/style.css';
</style>
