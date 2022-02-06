<template>
    <!-- <Header /> -->
    <div class="grid grid-nogutter">
      <div class="col-fixed" style="width:100px">
        <AsideMenu />
      </div>
      <div class="col">

        <h1>Main</h1>
         <router-link to="/Users">Users</router-link> 
         <router-link to="/Messages">Messages</router-link> 
      </div>
    </div>
    <!-- <Sidebar v-model="visibleLeft" :baseZIndex="1000">
            <h3>Left Sidebar</h3>
    </Sidebar> -->
</template>

<script lang="ts">
import { ref, Ref, inject, onMounted, defineComponent } from 'vue'
import  Header from '../components/header/Header.vue'
import AsideMenu from '../components/menu/AsideMenu.vue'
import { Socket } from'socket.io-client'

export default defineComponent({
  name: 'Main',
  components: {
    Header,
    AsideMenu
  },
  setup() {}
})
</script>

<style>
.grid {
  width: 100%;
}
</style>