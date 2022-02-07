<template>
    <div class="login-form p-d-flex" style='width:50%;max-width:400px;margin:0 auto;'>
        <router-view/>
        <div class="p-d-flex p-jc-center">
            <div class="card">
                <h5 class="p-text-center">Вход</h5>
                <form @submit.prevent="formSubmit" class="p-fluid">
                    <div class="p-field">
                        <div class="p-float-label">
                            <InputText v-model="login" id="name" placeholder="Имя"/>
                        </div>
                    </div>
                    <div class="p-field">
                        <div class="p-float-label">
                            <Password id="password" v-model="password" placeholder="Пароль" toggleMask/>
                               
                        </div>
                    </div>
                    <Button type="submit" label="Войти" class="p-mt-2" />
                </form>
            </div>
        </div>
         <router-link to="/registration">Регистрация</router-link>
    </div>
</template>

<script lang="ts">
import { ref, Ref, inject, onMounted } from 'vue';
import { Socket } from'socket.io-client'
import axios, { AxiosRequestConfig, AxiosResponse} from 'axios';
import router from '../router'
import Request from '../service/Request'

export default {
    setup() {
  
        //const socket: Socket = inject('socket')
        onMounted(() => localStorage.removeItem('token'))
       
        const login: Ref<string> = ref('')
        const password: Ref<string> = ref('')

        const formSubmit = () => {

            const data = new FormData();
            data.append('login', JSON.stringify(login.value))
            data.append('password', JSON.stringify(password.value))

            let axiosConfig: AxiosRequestConfig = {
                headers: {
			        "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*"
                },
                method: 'post',
                url: 'http://localhost:8000/auth/login',
                data: data
            }
            console.log('configa login', axiosConfig)
            
            Request.send(axiosConfig).then(response => {
                if(response.data != "USER_NOT_FOUND") {

                    console.log('IN VIEW', response)
                    localStorage.setItem('token', response.data)
                    router.push('profile')
                } else {
                    alert('Пользователь не найден')
                }
            })
        }

        return { login, password, formSubmit }
    }
}
</script>

<style lang="scss" scoped>
.login-form {
    .card {
        min-width: 450px;

        form {
            margin-top: 2rem;
        }

        .p-field {
            margin-bottom: 1.5rem;
        }
    }

    @media screen and (max-width: 960px) {
        .card {
            width: 80%;
        }
    }
}

</style>
