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
import { Socket } from'socket.io-client'

export default defineComponent({
  name: 'Profile',
  components: {
   
  },

  setup() {
    let count = ref(0)
   
    onMounted(() => {
      console.log('main mount')
    })
  }
})
</script>

<style>

</style>