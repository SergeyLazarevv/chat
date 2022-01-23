<template>
  <main>
    <router-view/>
    
    <!-- <div id="nav">
      <router-link to="/login">login22</router-link> |
      <router-link to="/main">main33</router-link> |
      <router-link to="/registration">регистрация</router-link>
    </div> -->
  </main>
</template>

<script lang="ts">

import { ref, inject, defineComponent, onMounted } from 'vue';
import Login from './view/Login.vue'
import Main from './view/Main.vue'
import Registration from './view/Registration.vue'
import { Socket } from'socket.io-client'

export default defineComponent({
  name: 'App',
  components: {
    Login,
    Main,
    Registration
  },

  setup() {
    let count = ref(0)
    const socket: Socket = inject('socket')
    let text = 'OLOLO'

  // socket.emit("message", 'POPOPO');
  // socket.on("message", (text) => {  
  //   console.log('mess Grom Server', text)
  // });
    onMounted(() => {
      console.log('main mount')
    })
  }
})
</script>

<style>

</style>