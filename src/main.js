import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { IonIcon } from '@ionic/vue'

createApp(App).use(router).use(CoreuiVue).component('ion-icon', IonIcon).mount('#app')

