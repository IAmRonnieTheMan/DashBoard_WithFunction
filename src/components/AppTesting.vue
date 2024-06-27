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
                    <div class="cardName">sales</div>
                </div>
                <div class="iconBx">
                    <ion-icon name="pricetags-outline"></ion-icon>
                </div>
            </div>
    
            <div class="card">
                <div>
                    <div class="numbers">800</div>
                    <div class="cardName">comments</div>
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
     <div class="details" :class="{'active':zoomactive}">
                <div class="recentOrders" :class="{'active':zoomactive}">
                    <div class="cardHeader">
                        <h2>Recent Orders</h2>
                       <button class="btn" @click="clicktozoom">View All</button>
                    </div>
        
                    <table class="table" :class="{'active':zoomactive}">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Payments</td>
                            <td>Status</td>
                           
                        </tr>
                    </thead>
    
    
                    <tbody>
                        <tr v-for="product in product" :key="product.id">
                            <td>{{ product.id }}</td>
                            <td>{{ product.name }}</td>
                            <td>{{ product.amount }}</td>
                           
                        </tr>
                    </tbody>
    
                    
                </table>
            </div>
    
          <!-- ==================new customers===================== -->
            <div class="recentCustomers">
                <div class="cardHeader">
                    <h2>Recent Customer</h2>       
                </div>
    
                <table>
                    <tr>
                        <td width="60px">
                            <div class="imgBx"><img src="@/assets/imgs/customer02.jpeg"></div>
                        </td>
                        <td>
                            <h4>David<br><span>Italy</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div class="imgBx"><img src="@/assets/imgs/customer01.jpeg"></div>
                        </td>
                        <td>
                            <h4>David<br><span>Italy</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div class="imgBx"><img src="@/assets/imgs/customer02.jpeg"></div>
                        </td>
                        <td>
                            <h4>David<br><span>Italy</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div class="imgBx"><img src="@/assets/imgs/customer02.jpeg"></div>
                        </td>
                        <td>
                            <h4>David<br><span>Italy</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div class="imgBx"><img src="@/assets/imgs/customer01.jpeg"></div>
                        </td>
                        <td>
                            <h4>David<br><span>Italy</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div class="imgBx"><img src="@/assets/imgs/customer01.jpeg"></div>
                        </td>
                        <td>
                            <h4>David<br><span>Italy</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div class="imgBx"><img src="@/assets/imgs/customer02.jpeg"></div>
                        </td>
                        <td>
                            <h4>David<br><span>Italy</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div class="imgBx"><img src="@/assets/imgs/customer01.jpeg"></div>
                        </td>
                        <td>
                            <h4>David<br><span>Italy</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div class="imgBx"><img src="@/assets/imgs/customer02.jpeg"></div>
                        </td>
                        <td>
                            <h4>David<br><span>Italy</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div class="imgBx"><img src="@/assets/imgs/customer01.jpeg"></div>
                        </td>
                        <td>
                            <h4>David<br><span>Italy</span></h4>
                        </td>
                    </tr>
                </table>
        </div>
    </div>
    </template>
    <script>
    import axios from 'axios'
    export default{
        data(){
            return{
                zoomactive:false,
                product:[]
            }
        },
    
        methods:{
            clicktozoom(){
                this.zoomactive=!this.zoomactive
            }
        },
    
        mounted(){
            axios.get('http://localhost:3030/product', {
                params:{
                    table:'product'
                }
            })
            .then(response =>{
                this.product=response.data.product
            })
            .catch(error =>{
                console.error(error)
            })
        }
    }
    </script>
    <style>
    @import '@/assets/css/order.css';
    </style>