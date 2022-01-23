<template>
  <div>
    <!-- <Menubar :model="items" /> -->
    <h1>Main</h1>
    <router-link to="/login">Вход</router-link> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Login',
  components: {
    
  },
  setup() {
    const name: string = "alexx"; 
  }
})
</script>

<style>

</style>