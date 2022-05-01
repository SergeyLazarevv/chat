
<template>
	<div id="header">
		<!-- <Menubar :model="items"> -->
            Online: {{ onlineCount }}
        <!-- </Menubar> -->
	</div>
</template>

<script lang='ts'>
import { ref, Ref, inject, defineComponent, onMounted } from 'vue';
import { Socket } from 'socket.io-client'
	
export default defineComponent({
    name: 'Header',
    components: {},
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

        let onlineCount: Ref<number> = ref(0)
        const socket: Socket = inject('socket')

        socket.emit("setOnline", localStorage.getItem('token'))
        socket.on("updateOnline", (online) => {  
            console.log('online Grom Server', online)
            onlineCount.value = online
        })


    return { onlineCount }

		return { items }
    }
    })
</script>