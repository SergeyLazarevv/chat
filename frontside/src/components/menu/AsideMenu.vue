<template>
	<div id="asideMenu">
		<Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
		<router-link to="/messages">Вход</router-link> 
		<router-link to="/users">Вход</router-link> 
	</div>
</template>

<script>
import { ref, inject, defineComponent, onMounted } from 'vue';
	
    export default defineComponent({
        name: 'AsideMenu',
        components: {
   
        },

        setup() {
            const items = ref([
					{
					label:'File',
                    },
					{
						label:'Edit',
					},
					{
						label:'Quit',
					}
				]);

				return { items }
        }
    })
</script>
<style>
#asideMenu {
	padding: 20px 0;
	display: flex;
	justify-content: center;
	background: rgba(161, 157, 157, 0.521);
	height: 100%;
}
</style>