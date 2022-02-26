<template>
    <div class="login-page" >
        <Card class="login-card">
            <template #content>
                <form @submit.prevent="formSubmit" class="p-fluid">
                    <div class="p-field">
                        <div class="p-float-label mb-3">
                            <InputText v-model="login" id="name" placeholder="Имя"/>
                        </div>
                    </div>
                    <div class="p-field">
                        <div class="p-float-label mb-3">
                            <Password id="password" v-model="password" placeholder="Пароль" toggleMask/>
                        </div>
                    </div>
                    <Button type="submit" label="Войти" class="p-mt-2 mb-3" />

                    <a @click="store.dispatch('chgTemplate', 'registration')">Регистрация</a>
                    <!-- <router-link to="/registration" class="pt-3">Регистрация</router-link> -->
                </form>
            </template>
        </Card>
    </div>
</template>

<script lang="ts">
import { ref, Ref, inject, onMounted } from 'vue';
import axios, { AxiosRequestConfig, AxiosResponse} from 'axios';
import router from '../router'
import Request from '../service/Request'
import { useStore } from "vuex";

export default {
    setup() {
  
        onMounted(() => localStorage.removeItem('token'))
    
        const login: Ref<string> = ref('')
        const password: Ref<string> = ref('')
        const store = useStore();

        const formSubmit = () => {

            const data = new FormData();
            data.append('login', JSON.stringify(login.value))
            data.append('password', JSON.stringify(password.value))

            let axiosConfig: AxiosRequestConfig = {
                method: 'post',
                url: 'auth/login',
                data: data
            }
            console.log('configa login', axiosConfig)
            
            Request.send(axiosConfig).then(response => {
                if(response.data != "USER_NOT_FOUND") {

                    console.log('IN VIEW', response)
                    localStorage.setItem('token', response.data)
                    store.dispatch('chgTemplate', 'main')
                    router.push('profile')
                } else {
                    alert('Пользователь не найден')
                }
            })
        }

        // store.dispatch('chgTemplate', 'registration')

        return { login, password, formSubmit, store }
    }
}
</script>

<style lang="scss" scoped>
.login-page {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
}

.login-card {
    width: 450px;

}

</style>
