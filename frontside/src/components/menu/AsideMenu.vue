<template>
	<div id="asideMenu">
		<Avatar image="https://xn--d1aiiaife6a2g.xn--p1ai/wp-content/uploads/2020/05/38..jpg" size="large" shape="circle"/>
		<router-link class="mt-4" to="/messages">
			<i class="pi pi-comment" style="font-size: 1.5rem"></i>
		</router-link> 
		<router-link class="mt-4" to="/users">
			<i class="pi pi-user-plus" style="font-size: 1.5rem"></i>
		</router-link> 
		<router-link class="mt-4" to="/profile">
			<i class="pi pi-home" style="font-size: 1.5rem"></i>
		</router-link> 
		<i class="pi pi-power-off mt-4" style="font-size: 1.5rem" @click="logout"></i> 
	</div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { useStore } from "vuex"
import router from '../../router'
import { Socket } from 'socket.io-client'
	
export default defineComponent({
    name: 'AsideMenu',
    components: {
   
    },

    setup() {

		const store = useStore();
		const socket: Socket = inject('socket')
            
		const logout = (): void => {
			
			localStorage.removeItem('token')
			//socket.disconnect()
			socket.emit("logOut")
			store.dispatch('chgTemplate', 'login')
			router.push('/')
		}

		return { logout }
    }
})
</script>
<style>
	#asideMenu {
		padding: 20px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: rgba(14, 13, 13, 0.921);
		height: 100%;
	}
	i {
		color: white;
	}
</style>