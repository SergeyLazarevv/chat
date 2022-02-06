<template>
      <router-view/>
</template>

<script lang="ts">

import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    onMounted(() => {
      console.log('app mount')
    })
  }
})
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>