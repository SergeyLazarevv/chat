<template>
  <component :is="computedLayout">
  </component>
</template>

<script lang="ts">

import { defineComponent, onMounted, computed, watchEffect } from 'vue';
import router from './router'

// router.beforeEach((to, from, next) => {
//     //let token = cookie.methods.getCookie("token");
//     console.log('TO ', to)
//    // if(typeof to.meta != 'undefined' && typeof to.meta.title !='undefined'){
//         //document.title = to.meta.title;
//    // }
//     // if(to.name != 'login' && !token){
//     //     next('/login');
//     // }
//    // next();
// });
console.log('token ', localStorage.getItem('token'))
const defaultLayout = 'main';
let layout = defaultLayout;

if(!localStorage.getItem('token')) {
    console.log('to login ', localStorage.getItem('token'))
    layout = 'login'
    // router.push('login')
} else {
    console.log('to main log ')
    // router.push('main')
}


export default defineComponent({
  name: 'App',
  components: {
  
  },
  setup() {
    onMounted(() => {
      console.log('app mount', router)
    })

  
    let computedLayout = computed(() => layout).value
    console.log('computedLayout ', computedLayout)
    watchEffect(() => {
      console.log('COMP LAYOUT', computedLayout)
    })
   
    return { computedLayout }
  }



})
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>