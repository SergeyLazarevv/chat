<template>
  <div class="main grid grid-nogutter pt-3">
    <div class="col-fixed" style="width:300px">
      <Card>
        <template #header>
          <img class="avatar" alt="user header" src="https://xn--d1aiiaife6a2g.xn--p1ai/wp-content/uploads/2020/05/38..jpg">
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
import { ref, Ref, inject, onMounted, defineComponent } from 'vue'
// import  Header from '../components/header/Header.vue'
// import AsideMenu from '../components/menu/AsideMenu.vue'
import { Socket } from'socket.io-client'

export default defineComponent({
  name: 'Profile',
  components: {},
  setup() {
    onMounted(() => console.log('profile MOUNT'))
  }
})
</script>

<style>
.grid {
  width: 100%;
}
</style>