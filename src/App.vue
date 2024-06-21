<template>
    <!-- loginornot為false時顯示AppLoginPage, true則顯示DefaultLayout -->
    <DefaultLayout v-if="loginornot" />
    <AppLoginPage v-if="!loginornot && !registerornot" @loginSuccess="handleLoginSuccess" @RegisterSuccess="handleRegisterSuccess" />
    <AppRegister v-if="registerornot" @RegisterSuccess="handleRegisterSuccess" />
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout.vue'
import AppLoginPage from './views/AppLoginPage.vue';
import AppRegister from './views/AppRegister.vue';

export default {
    components: {
        DefaultLayout,
        AppLoginPage,
        AppRegister
    },
    data() {
        return {
            loginornot: false,
            registerornot: false
        }
    },
    methods: {
        handleLoginSuccess() {
            this.loginornot = true;
        },
        handleRegisterSuccess() {
            this.registerornot = true;
            console.log('register=true');
        }
    }
}
</script>
