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
              <div class="loginpassword">
                  <span class="pwtitleicon"><ion-icon name="key-outline"></ion-icon></span>&ensp;
                  <input class="pwinput" type="password" v-model="checkpassword">
              </div>
          </div>
      
      <div class="loginbutton" @click="login"><button class="button"><ion-icon name="arrow-forward-outline"></ion-icon></button></div>
  </div>
  </template>
  
  <script>
export default{
  data(){
    return{
        email:'',
        password:'',
        checkpassword:'',
        words:''
    }
  },
  methods: {
    //註冊且成功
    login() {
      const email=this.email.toString()
      if(email !== '' && this.password === this.checkpassword){
        // this.$router.push('/17');
        
        this.words=`你好！${email}`;
        //把資料推入資料庫
      }
    }

    //檢查是否有相同帳號

    //密碼不相同

    //
  }
}
</script>