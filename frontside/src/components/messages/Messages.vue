<template>
    <div class="grid p-5">
        <div class="col-12">
            
        </div>
    </div>
</template>

<script lang="ts">
import { ref, Ref, inject, onMounted, defineComponent } from 'vue'

import { Socket } from'socket.io-client'

export default defineComponent({
  name: 'Messages',
  components: {},
  setup() {

    onMounted(() => console.log('messages MOUNT'))

    const messagesList: Ref<any> = ref([])
  }
})
</script>

<style>
.grid {
  width: 100%;
}
</style>