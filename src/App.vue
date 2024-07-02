<template>
    <!-- loginornot為false時顯示AppLoginPage, true則顯示DefaultLayout -->
    <DefaultLayout v-if="loginornot" />
    <AppLoginPage v-if="!loginornot && !registerornot" @loginSuccess="handleLoginSuccess" @RegisterSuccess="handleRegisterSuccess"/>
    <AppRegister v-if="registerornot" @RegisterSuccess="handleRegisterSuccess" @RegisterSuccessjump="handleRegisterSuccessJump"  />
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout.vue';
import AppLoginPage from './views/AppLoginPage.vue';
import AppRegister from './views/AppRegister.vue';
import AppLogin from './components/AppLogin.vue';

export default {
    components: {
        DefaultLayout,
        AppLoginPage,
        AppRegister,
        AppLogin
    },
    data() {
        return {
            loginornot: false,
            registerornot: false,
            loggingout123:false
        }
    },
    methods: {
        handleLoginSuccess() {
            this.loginornot = true;
            const currentTime = new Date().getTime(); //取得登入時間
            localStorage.setItem('isLoggedIn', true); //除存'isLgoggedIn'為true在localStorage（本機儲存槽）中
            localStorage.setItem('loginTime', currentTime); //除存'loginTime'為登入時間在localStorage（本機儲存槽）中
        },
        handleRegisterSuccess() {
            this.registerornot = true;
        },
        handleRegisterSuccessJump(){
            this.registerornot = false;
        },
        checkLoginStatus() {
            const isLoggedIn = localStorage.getItem('isLoggedIn');
            const loginTime = localStorage.getItem('loginTime');
            const currentTime = new Date().getTime();
            const time = 800 * 60 * 1000;
           
            if (isLoggedIn && loginTime && (currentTime - loginTime) < time) { //有登入且抓取存取的時間且與現在時間差距小於半小時
                this.loginornot = true;
            } else {
                this.loginornot = false;
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('loginTime');
            }
            
        },
    },
    mounted() {
        this.checkLoginStatus();  
    }
}
</script>
