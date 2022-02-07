<template>
  <component :is="store.getters.getTemplate">
  </component>
</template>

<script lang="ts">

import { defineComponent, onMounted, onBeforeMount, computed, watchEffect, ref } from 'vue';
import router from './router'
import { useStore } from "vuex";

console.log('token ', localStorage.getItem('token'))

export default defineComponent({
  name: 'App',
  components: {},
  setup() {

    const store = useStore();

    onBeforeMount(() => {

      if(!localStorage.getItem('token')) {
        router.push('/')
      }
    })

    onMounted(() => {console.log('app mount ', store.getters.getTemplate)})
   
    return { store }
  }



})
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>