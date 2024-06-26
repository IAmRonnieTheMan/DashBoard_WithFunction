<template>
  <div class="registerblock">    
      <label class="label">{{ words }}</label>
          <div class="unlocktitle">
              <div class="loginuser">
                  <span class="usertitleicon"><ion-icon name="person-circle-outline"></ion-icon></span>&ensp;
                  <input class="userinput" type="email" v-model="user" placeholder="type your user name">
              </div>
              <div class="loginpassword">
                  <span class="pwtitleicon"><ion-icon name="key-outline"></ion-icon></span>&ensp;
                  <input class="pwinput" type="password" v-model="password" placeholder="type your password">
              </div>
              <div class="loginpassword">
                  <span class="pwtitleicon"><ion-icon name="mail-outline"></ion-icon></span>&ensp;
                  <input class="pwinput" type="email" v-model="email" placeholder="type your email">
              </div>
          </div>
      <div class="backbutton" @click="back"><button class="button"><ion-icon name="arrow-back-outline"></ion-icon></button></div>
      <div class="loginbutton" @click="register"><button class="button"><ion-icon name="arrow-forward-outline"></ion-icon></button></div>
  </div>
  </template>
  
  <script>
  import axios from 'axios'
export default{
  data(){
    return{
        email:'',
        password:'',
        user:'',
        words:'註冊頁面'
    }
  },
  methods: {
    //註冊且成功
    async register() {
      if(this.email !== '' && this.password !==''&& this.user!==''){
      try{ // 把資料寫入資料庫
        const response = await axios.post('http://localhost:3030/insert',{
          sqluser:this.user,
          sqlpassword:this.password,
          sqlemail:this.email,
        })
        if(response.status===200){
          console.log('恭喜註冊成功')
          this.words=`您好${this.user},2秒後跳回登入頁面`
          setTimeout(()=>{
            this.$emit('RegisterSuccessjump')
          },2000)
        }
      }
      catch(error){
        console.error(error)
        if(error.response.status===400){
          this.words='已有相同使用者名稱或信箱'
        }
      }
    }
  },
   
      back(){
          this.$emit('RegisterSuccessjump')
      }
   

  }
}
</script>
<style>
@import"@/assets/css/register.css"
</style>