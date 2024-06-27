<template>
    <div class="cardBox">
      <div class="card">
        <div>
          <div class="numbers">1,504</div>
          <div class="cardName">Daily Views</div>
        </div>
        <div class="iconBx">
          <ion-icon name="cash-outline"></ion-icon>
        </div>
      </div>
  
      <div class="card">
        <div>
          <div class="numbers">80</div>
          <div class="cardName">Sales</div>
        </div>
        <div class="iconBx">
          <ion-icon name="pricetags-outline"></ion-icon>
        </div>
      </div>
  
      <div class="card">
        <div>
          <div class="numbers">800</div>
          <div class="cardName">Comments</div>
        </div>
        <div class="iconBx">
          <ion-icon name="card-outline"></ion-icon>
        </div>
      </div>
  
      <div class="card">
        <div>
          <div class="numbers">1,504</div>
          <div class="cardName">Taiwan</div>
        </div>
        <div class="iconBx">
          <ion-icon name="wallet-outline"></ion-icon>
        </div>
      </div>
    </div>
    <!-- ========================order================= -->
    <div class="details" :class="{ active: zoomactive }">
      <div class="recentOrders" :class="{ active: zoomactive }">
        <div class="cardHeader">
          <h2>Recent Orders</h2>
          <button class="btn" @click="clicktozoom">View All</button>
        </div>
  
        <table class="table" :class="{ active: zoomactive }">
          <thead>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>AMOUNT</td>
              <td>STATUS</td>
            </tr>
          </thead>
  
          <tbody>
            <tr v-for="product in productWithStatus" :key="product.id">
              <td>{{ product.id }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.amount }}</td>
              <td>
                <span class="status" :class="product.status.toLowerCase()">{{ product.status }}</span> <!-- 兩個class一個為靜態一個為動態 -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- ==================new customers===================== -->
      <div class="recentCustomers">
        <div class="cardHeader">
          <h2>Recent Customers</h2>
        </div>
  
        <table>
          <tr v-for="customer in customerWithImg" :key="customer.name">
            <td width="60px">
              <div class="imgBx"><img :src="customer.img" /></div>
            </td>
            <td>
              <h4>{{ customer.name }}<br /><span>{{ customer.country }}</span></h4>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        zoomactive: false,
        product: [],
        customer: [],
      };
    },
    computed: {
      productWithStatus() {
        return this.product.map((product) => {
          product.status = this.calculateStatus(product.amount);
          return product;
        });
      },
      customerWithImg() {
        return this.customer.map((customer ,index) => {
          customer.img = this.calculateImg(index);
          return customer;
        });
      },
    },
    methods: {
      clicktozoom() {
        this.zoomactive = !this.zoomactive;
      },
      calculateStatus(amount) {
        if (amount % 7 === 1) {
          return "Delivered";
        } else if (amount % 7 === 0) {
          return "InProgress";
        } else if (amount % 7 === 2) {
          return "Return";
        } else {
          return "Pending";
        }
      },
      calculateImg(index) {
        if (index % 3 === 1) {
          return require('@/assets/imgs/marrge.png');
        } else if (index % 3 === 2) {
          return require('@/assets/imgs/buzz.png');
        } else if (index % 3 === 0) {
          return require('@/assets/imgs/Lisa.png');
        } else {
          return require('@/assets/imgs/123.jpg');
        }
      },
    },
    mounted() {
      axios
        .get("http://localhost:3030/takeit", {
          params: {
            table: ["product", "customer"],
          },
        })
        .then((response) => {
          this.product = response.data.product;
          this.customer = response.data.customer;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  };
  </script>
  
  <style>
  @import "@/assets/css/order.css";
  </style>
