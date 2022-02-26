<template>
  <div class="main grid grid-nogutter">
      <div class="col-fixed" style="width:180px">
        <Card>
          <template #header>
            <img alt="user header" src="demo/images/usercard.png">
          </template>
          <template #title>
            Advanced Card
          </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </template>
          <template #footer>
            <Button icon="pi pi-check" label="Save" />
            <Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
          </template>
        </Card>
      </div>
      <div class="col">
   
      </div>
    </div>
</template>

<script lang="ts">

import { ref, inject, defineComponent, onMounted } from 'vue';
import { Socket } from'socket.io-client'

export default defineComponent({
  name: 'Profile',
  components: {
   
  },

  setup() {
    let count = ref(0)
   
    onMounted(() => {
      console.log('main mount')
    })
  }
})
</script>

<style>

</style>