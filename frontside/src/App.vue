<template>
  <main>
    <router-view/>
    <div id="nav">
      <router-link to="/login">login22</router-link> |
      <router-link to="/main">main33</router-link> |
      <router-link to="/registration">регистрация</router-link>
    </div>
  </main>
</template>

<script lang="ts">
import { ref, inject, defineComponent, onMounted } from 'vue';
import Login from './view/Login.vue'
import Main from './view/Main.vue'
import Registration from './view/Registration.vue'

export default defineComponent({
  name: 'App',
  components: {
    Login,
    Main,
    Registration
  },

  setup() {
    let count = ref(0)
    const socket = inject('socket')
    console.log(socket)

    onMounted(() => {
     
    })
  }
})
</script>

<style>

</style>