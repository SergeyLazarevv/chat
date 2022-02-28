<template>
    <div class="registration-page">
            <Card class="registration-card">
                <template #content>
                <h5 class="mb-3">Регистрация</h5>
                <form @submit.prevent="formSubmit" class="p-fluid">
                    <div class="mb-3">
                        <InputText v-model="name" id="name" placeholder="Имя"/>
                    </div>
                    <div class="p-float-label p-input-icon-right mb-3">
                        <i class="pi pi-envelope" />
                        <InputText id="email"  v-model="email" placeholder="Почта"/>
                    </div>
                    <div class="mb-3">
                        <InputText v-model="login" id="login" placeholder="Логин"/>
                    </div>
                    <div class="mb-3">
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
                    <Button type="submit" label="Регистрация" class="p-mt-2 mb-3" />
                    <a @click="store.dispatch('chgTemplate', 'login')">Логин</a>
                </form>
                </template>
        </Card>
    </div>
</template>

<script lang="ts">
import { onMounted, ref ,Ref} from 'vue';
import Request from '../service/Request'
import router from '../router'
import { AxiosRequestConfig } from 'axios';
import { useStore } from 'vuex'

export default {
    setup() {
      
        onMounted(() => localStorage.removeItem('token'))
        
        const name: Ref<string>= ref('');
        const login: Ref<string>= ref('');
        const password: Ref<string> = ref('');
        const email: Ref<string> = ref('');
        const store = useStore();

        const formSubmit = () => {

            const data = new FormData();
            data.append('login', JSON.stringify(login.value))
            data.append('password', JSON.stringify(password.value))
            data.append('email', JSON.stringify(email.value))
            data.append('name', JSON.stringify(name.value))

            let axiosConfig: AxiosRequestConfig = {
                method: 'post',
                url: 'auth/registration',
                data: data
            }
            
            Request.send(axiosConfig).then(response => {
                if(response.data != 'USER_LOGIN_EXIST') {
                    console.log('IN VIEW', response)
                    localStorage.setItem('token', response.data)
                    store.dispatch('chgTemplate', 'main')
                    router.push('profile')
                } else {
                    alert('user already exist')
                }
            })
        }

        return {email, login, password, formSubmit, store, name}
    }
}
</script>

<style lang="scss" scoped>
.registration-page {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
}
.registration-card {
    width: 450px;

}
</style>