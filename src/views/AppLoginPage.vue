<template>
<div class="loginblock">    
    <span class="logintitleicon"><ion-icon name="people-outline"></ion-icon></span>
    <label class="label">{{ words }}</label>
        <div class="unlocktitle">
            <div class="loginuser">
                <span class="usertitleicon"><ion-icon name="person-circle-outline"></ion-icon></span>&ensp;
                <input class="userinput" type="email" v-model="email">
            </div>
            <div class="loginpassword">
                <span class="pwtitleicon"><ion-icon name="key-outline"></ion-icon></span>&ensp;
                <input class="pwinput" type="password" v-model="password">
            </div>
        </div>
    
    <div class="loginbutton" @click="login"><button class="button"><ion-icon name="arrow-forward-outline"></ion-icon></button></div>
</div>
</template>

<script>
import AppLogin from '@/components/AppLogin.vue'
        
    export default{
        props:['words'],
        components:{AppLogin},
      
        data(){
            return{
            email:"",
            password:""  
            }
        },

        methods:{
            login(){
                if(this.email==='123' && this.password==='123456'){
                    this.$router.push('/')
                }
            }
        }
    }

</script>