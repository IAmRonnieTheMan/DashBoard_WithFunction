<template>
<div class="loginblock">    
    <span class="logintitleicon"><ion-icon name="people-outline"></ion-icon></span>
    <label class="label">{{ words }}</label>
    <label v-if="canyoulogin"><button class="youcanlogin" @click="gogologin"><ion-icon name="person-outline"></ion-icon></button></label>
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
import AppLogin from '@/components/AppLogin.vue';

export default{
            components:{AppLogin},
          
            data(){
                return{
                    email:"",
                    password:"",
                    words:"",
                    canyoulogin:false,
                }
            },
    
            methods:{
                login(){
                    const email= this.email.toString()
                    const password=this.password.toString()
                    switch (true) {
                        case email==='123',password==='123456':
                                this.$router.push('/8');
                                this.canyoulogin=true;
                                this.words='Hi ronnie, click the button';
                            
                            break;
                    
                        case email==='1234',password==='1234567':
                                this.$router.push('/8');
                                this.canyoulogin=true;
                                this.words='Hi sandy, click the button';
                            
                            break;
                    }
                },

                gogologin(){
                    this.$router.push('/')
                }
            }
        }

</script>