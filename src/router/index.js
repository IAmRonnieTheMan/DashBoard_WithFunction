import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layout/DefaultLayout.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppDetails from '@/views/AppDetails.vue'
import AppTime from '@/views/AppTime.vue'
import AppClock from '@/views/AppClock.vue'
import AppDownload from '@/views/AppDownload.vue'
import AppUpload from '@/views/AppUpload.vue'
import AppLogin from '@/components/AppLogin.vue'
import AppLoginPage from '@/views/AppLoginPage.vue'
import AppChart from '@/views/AppChart.vue'
import AppData from '@/views/AppData.vue'
import AppTest from '@/views/AppTest.vue'
import AppLoading from '@/views/AppLoading.vue'
const routes = [
  {
   path:'/',
   name:'defaultlayout',
   component:DefaultLayout,
   redirect:'/2'
  
  },
  {
    path:'/1',
   name:'appheader',
   component:AppHeader
  },
  {
    path:'/2',
   name:'appdetails',
   component:AppDetails
  },
  {
    path:'/3',
   name:'apptime',
   component:AppTime
  },
  {
   path:'/4',
   name:'appclock',
   component:AppClock
  },
  {
    path:'/5',
    name:'appdowmload',
    component:AppDownload
   },
   {
    path:'/6',
    name:'appupload',
    component:AppUpload
   },
   {
    path:'/7',
    name:'applogin',
    component:AppLogin
   },
   {
    path:'/8',
    name:'apploginpage',
    component:AppLoginPage
   },
   {
    path:'/9',
    name:'appchart',
    component:AppChart
   },
   {
    path:'/10',
    name:'appdata',
    component:AppData
   },
   {
    path:'/11',
    name:'apptest',
    component:AppTest
   },
   {
    path:'/12',
    name:'apploading',
    component:AppLoading
   }
   
   
   
   
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
