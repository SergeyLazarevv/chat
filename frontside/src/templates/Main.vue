<template>
    <div class="main grid grid-nogutter">
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
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,28,121,0.6082165287990196) 33%, rgba(0,212,255,1) 100%);
}
</style>