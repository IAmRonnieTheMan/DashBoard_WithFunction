<template>
    <!-- loginornot為false時顯示AppLoginPage, true則顯示DefaultLayout -->
 <DefaultLayout v-if="loginornot"/>
 <AppLoginPage v-if="!loginornot" @loginSuccess="handleLoginSuccess"/>
</template>
<script>
import DefaultLayout from '@/layout/DefaultLayout.vue'
import AppLoginPage from './views/AppLoginPage.vue';
export default{
    components:{
        DefaultLayout,
        AppLoginPage
    },
    data(){
        return{
            loginornot:false
        }
    },
    methods:{ //被AppLoginPage觸發後把loginornot變為true
        handleLoginSuccess(){
            this.loginornot=true
        },
    }
}
</script>

