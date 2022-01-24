import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Password from 'primevue/password';
import Divider from 'primevue/divider';
import Dialog from 'primevue/dialog';
import Sidebar from 'primevue/sidebar';
import Menubar from 'primevue/menubar';
import Vuex from "vuex";
import VueSocketIO from 'vue-socket.io'
import store from './vuex/store'
import { io } from'socket.io-client' 

import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                //core css
import "primeicons/primeicons.css"                          //icons

const app = createApp(App)
app.use(router)
app.use(PrimeVue)

app.component('Dialog', Dialog);
app.component('Divider', Divider);
app.component('Password', Password);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Checkbox', Checkbox);
app.component('Dropdown', Dropdown);
app.component('Calendar', Calendar);
app.component('Sidebar',Sidebar);
app.component('Menubar',Sidebar);
 
const socket = io('http://localhost:8080', {})    
console.log('9090', socket)
app.provide('socket', socket)

app.mount('#app')

if(!localStorage.getItem('token')) {
    console.log('to login ', localStorage.getItem('token'))
    router.push('login')
}
