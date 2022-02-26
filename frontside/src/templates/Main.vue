<template>
    <div class="main grid">
      <div class="col-fixed" style="width:80px">
        <AsideMenu />
      </div>
      <div class="col">
        <router-view/>
      </div>
    </div>
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
  setup() {
    onMounted(() => { console.log('main mount')})
  }
})
</script>

<style>
.main {
  width: 100%;
  background: radial-gradient(circle, rgba(244,240,241,1) 0%, rgba(239,240,241,1) 100%);
}
</style>