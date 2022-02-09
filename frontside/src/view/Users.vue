<template>
    <div class="grid p-5">
      <div class="col-12">
        <h1>Users</h1>
      </div>
        <div class="col md:col-3" v-for="user in users" :key="user.id"> 
          <UserCard :user="user"></UserCard>
        </div>
      </div>
</template>

<script lang="ts">
import { ref, Ref, watch, onMounted, defineComponent } from 'vue'
import Request from '../service/Request'
import { AxiosRequestConfig } from 'axios';
import UserCard from '../components/users/userCard.vue'

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
      headers: {
			  "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "authorization": localStorage.getItem('token')
      },
      method: 'post',
      url: 'http://localhost:8000/user/get-users-by'
    }

    Request.send(axiosConfig).then(response => {
      console.log('IN USER PAGE', response.data)
      users.value = response.data
      console.log(users)
    })
  
    return { users }
  }
})
</script>

<style>
.grid {
  width: 100%;
}
</style>