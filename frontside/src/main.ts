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
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';

import Vuex from "vuex";
import VueSocketIO from 'vue-socket.io'
import store from './vuex/store'
import { io } from'socket.io-client' 

import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                //core css
import "primeicons/primeicons.css"                          //icons
import "/node_modules/primeflex/primeflex.css"              //primevue flex classes

import Login from "./templates/Login.vue"
import Registration from "./templates/Registration.vue"
import Main from "./templates/Main.vue"

const app = createApp(App)
app.use(router)
app.use(PrimeVue)

app.component('login', Login);
app.component('Registration', Registration);
app.component('main', Main);

app.component('Dialog', Dialog);
app.component('Divider', Divider);
app.component('Password', Password);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Checkbox', Checkbox);
app.component('Dropdown', Dropdown);
app.component('Calendar', Calendar);
app.component('Sidebar',Sidebar);
app.component('Menubar', Menubar);
app.component('Avatar',Avatar);
app.component('AvatarGroup', AvatarGroup);
 
const socket = io('http://localhost:8080', {})    
console.log('9090', socket)
app.provide('socket', socket)

app.mount('#app')

// if(!localStorage.getItem('token')) {
//     console.log('to login ', localStorage.getItem('token'))
//     router.push('login')
//     console.log('to login')
// } else {
//     console.log('to main')
//     router.push('main')
// }
