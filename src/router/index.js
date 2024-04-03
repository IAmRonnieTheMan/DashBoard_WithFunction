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
   }
   
   
   
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
