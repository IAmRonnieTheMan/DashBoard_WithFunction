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
        <input class="userinput" type="text" v-model="user" placeholder="type your user name" @keydown.down="moveFocusToPassword">
      </div>
      <div class="loginpassword">
        <span class="pwtitleicon"><ion-icon name="key-outline"></ion-icon></span>&ensp;
        <input ref="passwordInput" class="pwinput" type="password" id="passwordblock" v-model="password" placeholder="type your password" @keypress.enter="login">
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
          setTimeout(() => {
            this.gogologin();
          }, 2000);
        }
      } catch (error) {
        if (error.response.status === 400) {
          if (error.response.data.message === 'no user') {
            this.words = '無此使用者';
          } else if (error.response.data.message === 'wrong password') {
            this.words = '密碼錯誤';
          }
        } else {
          this.words = '登入失敗哭哭';
        }
      }
    },

    gogologin() {
      this.$emit('loginSuccess');
    },

    registerpage() {
      this.$emit('RegisterSuccess');
      console.log('click');
    },

    moveFocusToPassword() {
      this.$refs.passwordInput.focus(); // 将焦点移动到密码输入框
    }
  }
};
</script>
