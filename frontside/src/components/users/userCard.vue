<template>
    <Card class="userCard" style="width: 220px">
        <template #header>
            <!-- <Avatar image="https://xn--d1aiiaife6a2g.xn--p1ai/wp-content/uploads/2020/05/38..jpg" size="xlarge" shape="circle" /> -->
            <img class="avatar" alt="user header" src="https://xn--d1aiiaife6a2g.xn--p1ai/wp-content/uploads/2020/05/38..jpg">
        </template>
        <template #title>
            <div class="user_name"> {{ user.firstName ? user.firstName : "-" }} </div>
            <div> {{ user.lastName ? user.lastName : "-" }} </div>
        </template>
        <template #content>
            <div> {{ user.email ?? "-" }} </div>
        </template>
        <template #footer>
            <div class="userCard_footer">
                <i class="pi pi-home" style="font-size: 1.5rem"></i>
                <i class="pi pi-comment" style="font-size: 1.5rem"></i>
            </div>
            <div v-if="user.online">ONLINE</div>
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

        // console.log('proops', props.user)
        // console.log('proops 2', props)
        // console.log('proops', props.user.user_email)
   
        onMounted(() => {
            console.log('user card mount')
        })

        return { props }
    }
}
</script>

<style lang="scss" scoped>

.userCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    /* padding: 10px 5px; */
    border-radius: 10px;
    text-align: center;
    margin: 10px 0;
    min-height: 55px;
    .user_name {
        font-size: 20px;
    }
    ::v-deep(.p-card-body) {
        width:100%;
    }
    .userCard_footer {
        display: flex;
        justify-content: space-around;
        /* border-top: 1px solid rgba(0,0,0,.1); */
    }
    .pi {
        transition: .4s;
        color: rgba(0,0,0,.5);
    }
    .pi:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
}

</style>