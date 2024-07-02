<template>
    <div class="loginmenu">
      <ul> 
        <li>
          <a><router-link to="/8">
            <span class="loginicon"><ion-icon name="log-in-outline"></ion-icon></span>&ensp;
            <span class="logintitle" :words='nametitle' @click="loginclick">LOGIN</span>
          </router-link></a>
        </li>
        
        <li>
          <a>
            <span class="loginicon"><ion-icon name="log-out-outline"></ion-icon></span>&ensp;
            <span class="signouttitle">SIGN OUT</span>
          </a>
        </li>
      </ul>  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nametitle: ''
      }
    },
    methods: {
      loginclick() {
        console.log('login click true');
        this.nametitle = "welcome back";
        this.$emit('loginSuccess'); 
      },
    }
  }
  </script>
  
  <style>
  @import "@/assets/css/login.css";
  </style>
  