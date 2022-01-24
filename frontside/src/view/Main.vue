<template>
  <div>
    <!-- <Menubar :model="items" /> -->
    <h1>Main</h1>
    <div> Online: {{ onlineCount }}</div>
    <router-link to="/login">Вход</router-link> 
  </div>
</template>

<script lang="ts">
import { ref, Ref, inject, onMounted, defineComponent } from 'vue'
import { Socket } from'socket.io-client'

export default defineComponent({
  name: 'Login',
  components: {
    
  },
  setup() {
     
    let onlineCount: Ref<number> = ref(0)

    const socket: Socket = inject('socket')
    socket.emit("setOnline", localStorage.getItem('token'))
    socket.on("getOnline", (online) => {  
      console.log('online Grom Server', online)
      onlineCount.value = online
    })


    return { onlineCount }
  }
})
</script>

<style>

</style>