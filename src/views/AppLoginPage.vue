<template>
    <div class="loginblock">
      <span class="logintitleicon"><ion-icon name="people-outline"></ion-icon></span>
      <label class="label">{{ words }}</label>
      <label v-if="canyoulogin">
        <button class="youcanlogin" @click="gogologin">
          <ion-icon name="person-outline"></ion-icon>
        </button>
      </label>
      <div class="unlocktitle">
        <div class="loginuser">
          <span class="usertitleicon"><ion-icon name="person-circle-outline"></ion-icon></span>&ensp;
          <input class="userinput" type="text" v-model="user" placeholder="type your user name">
        </div>
        <div class="loginpassword">
          <span class="pwtitleicon"><ion-icon name="key-outline"></ion-icon></span>&ensp;
          <input class="pwinput" type="password" v-model="password" placeholder="type your password">
        </div>
      </div>
      <div class="register" @click="registerpage"><strong>register</strong></div>
      <div class="loginbutton">
        <button class="button" @click="login">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        user: '',
        password: '',
        words: '',
        canyoulogin: false
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:3030/get', {
            loginuser: this.user,
            loginpw: this.password
          });
  
          if (response.status === 200) {
            this.words = '登入成功囉';
            this.gogologin();
          } else if (response.status === 400) {
            this.words = '登入失敗哭哭';
          } else {
            console.log('不知道怎麼了');
          }
        } catch (error) {
          console.error(error);
          this.words = '登入失敗哭哭';
        }
      },
  
      gogologin() {
        this.$emit('loginSuccess');
      },
  
      registerpage() {
        this.$emit('RegisterSuccess');
        console.log('click');
      }
    }
  };
  </script>
  
  