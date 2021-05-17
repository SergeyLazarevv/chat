<template>
    <div class="login-form p-d-flex" style='width:50%;margin:0 auto;'>
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
    </div>
</template>

<script lang="ts">
import { ref, Ref, onMounted } from 'vue';

export default {
    setup() {
        onMounted(() => {
            
        })

       
        const login: Ref<string> = ref('')
        const password: Ref<string> = ref('')


        const formSubmit = () => {
            
        }

        return { login, password, formSubmit}
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
