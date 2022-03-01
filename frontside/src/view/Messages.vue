<template>
  <div class="grid p-5">
    <div class="col-12">
      <!-- <MessagePreview></MessagePreview> -->
    </div>
    <!-- <div class="col md:col-3" v-for="messagesList in messages"> 
      <Messages></Messages>
    </div> -->
  </div>
</template>

<script lang="ts">
import { ref, Ref, inject, onMounted, defineComponent } from 'vue'
// import  Header from '../components/header/Header.vue'
// import AsideMenu from '../components/menu/AsideMenu.vue'
import { Socket } from'socket.io-client'

export default defineComponent({
  name: 'Messages',
  components: {},
  setup() {

    const messagesList: Ref<any> = ref([])
  }
})
</script>

<style>
.grid {
  width: 100%;
}
</style>