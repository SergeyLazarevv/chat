<template>
    <div class="main grid">
      <div class="col-fixed" style="width:80px;padding:0;">
        <AsideMenu />
      </div>
      <div class="col">
        <router-view/>
      </div>
    </div>
</template>

<script lang="ts">
import { ref, Ref, inject, onMounted, onUpdated, onActivated, onDeactivated, defineComponent } from 'vue'
import  Header from '../components/header/Header.vue'
import AsideMenu from '../components/menu/AsideMenu.vue'
import { Socket } from'socket.io-client'
import { useStore } from "vuex";

export default defineComponent({
  name: 'Main',
  components: {
    Header,
    AsideMenu
  },
  setup() {

    const store = useStore();
    const socket: Socket = inject('socket')

    onMounted(() => { 
      console.log('main mount !!!! set online', socket)
      let token = localStorage.getItem('token')

      if(!token) {
        store.dispatch('chgTemplate', 'login')
      } else {
        
        socket.emit("setOnline", token)
        socket.emit("getUsers")
        
        socket.on("setUsers", (users) => {  
          console.log('user list from server', users)
          store.dispatch('setUsers', users)
        })
        
        socket.on("updateOnline", (user) => {  
          console.log('new user online from Server', user)
          store.dispatch('setOnline', user)
        })
  
        socket.on("removeOnline", (user) => {
          console.log(user.email + "log off")
          store.dispatch('setOffline', user)
        })
      }

    })

    onUpdated(() => {
      console.log('main UPDATE !!@@')
    });

    onActivated(() => console.log('main ACTIVATED'))
    onDeactivated(() => console.log('main DEACTIVATED'))
  }
})
</script>

<style>
.main {
  width: 100%;
  background: radial-gradient(circle, rgba(244,240,241,1) 0%, rgba(239,240,241,1) 100%);
}
</style>