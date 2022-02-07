<template>
    <div class="login-form p-d-flex" style='width:50%;max-width:400px;margin:0 auto;'>
        <div class="p-d-flex p-jc-center">
            <div class="card">
                <h5 class="p-text-center">Регистрация</h5>
                <form @submit.prevent="formSubmit" class="p-fluid">
                    <div class="p-field">
                        <div class="p-float-label">
                            <InputText v-model="login" id="login" placeholder="Имя"/>
                        </div>
                    </div>
                    <div class="p-field">
                        <div class="p-float-label p-input-icon-right">
                            <i class="pi pi-envelope" />
                            <InputText id="email"  v-model="email" placeholder="Почта"/>
                        </div>
      
                    </div>
                    <div class="p-field">
                        <div class="p-float-label">
                            <Password id="password" v-model="password" placeholder="Пароль" toggleMask>
                                <template #header>
                                    <h6>Проверка сложности пароля</h6>
                                </template>
                                <template #footer="sp">
                                    {{sp.level}}
                                    <Divider />
                                    <p class="p-mt-2">Пароль должен содержать</p>
                                    <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
                                        <li>Заглавные буквы</li>
                                        <li>Прописные буквы</li>
                                        <li>Числа</li>
                                        <li>Минимум 8 символов</li>
                                    </ul>
                                </template>
                            </Password>
                        </div>
                    </div>
                    <Button type="submit" label="Регистрация" class="p-mt-2" />
                </form>
                <router-link to="/login">Вход</router-link> 
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { inject, onMounted, ref ,Ref} from 'vue';
import { Socket } from'socket.io-client'
import Request from '../service/Request'
import router from '../router'
import axios, { AxiosRequestConfig, AxiosResponse} from 'axios';

export default {
    setup() {
      
        onMounted(() => localStorage.removeItem('token'))
        
        const login: Ref<string>= ref('');
        const password: Ref<string> = ref('');
        const email: Ref<string> = ref('');

        const formSubmit = () => {

            const data = new FormData();
            data.append('login', JSON.stringify(login.value))
            data.append('password', JSON.stringify(password.value))
            data.append('email', JSON.stringify(email.value))

            let axiosConfig: AxiosRequestConfig = {
                headers: {
			        "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*"
                },
                method: 'post',
                url: 'http://localhost:8000/auth/registration',
                data: data
            }
            
            Request.send(axiosConfig).then(response => {
                if(response.data != 'USER_LOGIN_EXIST') {

                    console.log('IN VIEW', response)
                    localStorage.setItem('token', response.data)
                    router.push('profile')
                } else {
                    alert('user already exist')
                }
            })
        }

        return {email, login, password, formSubmit}
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