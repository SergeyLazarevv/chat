<template>
    <div class="grid">
      <div class="col">
        <h1>Users</h1> 
      </div>
    </div>
</template>

<script lang="ts">
import { ref, Ref, inject, onMounted, defineComponent } from 'vue'
// import  Header from '../components/header/Header.vue'
// import AsideMenu from '../components/menu/AsideMenu.vue'
import { Socket } from'socket.io-client'

export default defineComponent({
  name: 'Users',
  components: {},
  setup() {}
})
</script>

<style>
.grid {
  width: 100%;
}
</style>