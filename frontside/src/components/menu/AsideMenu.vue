<template>
	<div id="asideMenu">
		<Avatar icon="pi pi-user" size="xlarge" shape="circle" />
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

<script>
import { ref, inject, defineComponent, onMounted } from 'vue';
	
    export default defineComponent({
        name: 'AsideMenu',
        components: {
   
        },

        setup() {
            
			let logout = () => {
				localStorage.removeItem('token')
				router.push('login')
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
	background: rgba(161, 157, 157, 0.221);
	height: 100%;
}
</style>