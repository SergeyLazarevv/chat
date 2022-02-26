<template>
    <Card class="userCard" style="width: 220px">
        <template #header>
            <!-- <Avatar image="https://xn--d1aiiaife6a2g.xn--p1ai/wp-content/uploads/2020/05/38..jpg" size="xlarge" shape="circle" /> -->
            <img class="avatar" alt="user header" src="https://xn--d1aiiaife6a2g.xn--p1ai/wp-content/uploads/2020/05/38..jpg">
        </template>
        <template #title>
            <div> {{ user.user_firstName ?? "-" }} </div>
            <div> {{ user.user_lastName ?? "-" }} </div>
        </template>
        <template #content>
            <div> {{ user.user_email ?? "-" }} </div>
        </template>
        <template #footer class="userCard_footer">
            <i class="pi pi-home" style="font-size: 1.5rem"></i>
            <i class="pi pi-comment" style="font-size: 1.5rem"></i>
        </template>
    </Card>
</template>

<script lang="ts">

import { ref, toRefs, defineComponent, onMounted } from 'vue';

export default {
    name: 'UserCard',
    props: { 
        user: Object 
    },
    components: {},

    setup(props) {

        console.log('proops', props.user)
        console.log('proops 2', props)
        console.log('proops', props.user.user_email)
   
        onMounted(() => {
            console.log('user card mount')
        })

        return { props }
    }
}
</script>

<style>
.userCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    /* padding: 10px 5px; */
    border-radius: 10px;
    text-align: center;
    margin: 10px 0;
}
.p-card-body {
    width:100%;
}
.p-card-footer {
    display: flex;
    justify-content: space-evenly;
}
.pi {
    transition: .4s;
}
.pi:hover {
    cursor: pointer;
    transform: scale(1.2);
}
</style>