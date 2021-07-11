<template>
  <main>
    <router-view/>
    <div id="nav">
      <router-link to="/login">login22</router-link> |
      <router-link to="/main">main33</router-link>
      <router-link to="/Registration">регистрация</router-link>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import Login from './view/Login.vue'
import Main from './view/Main.vue'

export default defineComponent({
  name: 'App',
  components: {
    Login,
    Main
  },
  sockets:{
    connect: function(){
      console.log('socket connected')
    },
    customEmit: function(val){
      console.log('this method fired by socket server. eg: io.emit("customEmit", data)')
    }
  },
  setup() {
    let count = ref(0)
    console.log(count)
  }
})
</script>

<style>

</style>