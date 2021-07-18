<template>
    <div class="login-form p-d-flex" style='width:50%;margin:0 auto;'>
        <div class="p-d-flex p-jc-center">
            <div class="card">
                <h5 class="p-text-center">Регистрация</h5>
                <form @submit.prevent="formSubmit" class="p-fluid">
                    <div class="p-field">
                        <div class="p-float-label">
                            <InputText v-model="login" id="name" placeholder="Имя"/>
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
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { reactive, onMounted, ref ,Ref} from 'vue';

export default {
    setup() {
        onMounted(() => {
            //console.log('login',login)
            //this.$socket.emit('emit_method', 999);
        })


        const login: Ref<string> = ref('');
        const password: Ref<string> = ref('');
        const email: Ref<string> = ref('');

        const formSubmit = () => {
            
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