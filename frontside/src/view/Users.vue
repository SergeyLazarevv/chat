<template>
    <div class="grid p-5">
      <div class="col-12">
        <h2>Пользователи онлайн: {{ onlineCount }}</h2>
      </div>
        <div class="col md:col-3" v-for="user in users" :key="user.id"> 
          <UserCard :user="user"></UserCard>
        </div>
      </div>
</template>

<script lang="ts">
import { ref, Ref, watch, inject, defineComponent } from 'vue'
import Request from '../service/Request'
import { AxiosRequestConfig } from 'axios';
import UserCard from '../components/users/userCard.vue'
import { Socket } from 'socket.io-client'

export default defineComponent({
  name: 'Users',
  components: { UserCard },
  setup() {

    let users = ref([])
    watch(users, (newValue, oldValue) => {
      console.log('new value is: ' + newValue)
      console.log('new old value is: ' + oldValue)
    })
  
    let axiosConfig: AxiosRequestConfig = {
      method: 'post',
      url: 'user/get-users-by'
    }

    Request.send(axiosConfig).then(response => {
      console.log('IN USER PAGE', response.data)
      users.value = response.data
      console.log(users)
    })

    let onlineCount: Ref<number> = ref(0)
    const socket: Socket = inject('socket')

    socket.emit("setOnline", localStorage.getItem('token'))
    socket.on("getOnline", (online) => {  
      console.log('online Grom Server', online)
      onlineCount.value = online
    })
  
    return { users, onlineCount }
  }
})
</script>

<style>
.grid {
  width: 100%;
}
</style>