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
//import { useStore } from 'vuex'

export default {
    setup() {
  //      const { commit, dispatch } = useStore()

        onMounted(() => {
//             let socket = new WebSocket('ws://localhost:8080','echo-protocol')

// socket.onopen = function(e) {
//   alert("[open] Соединение установлено");
//   alert("Отправляем данные на сервер");
//   socket.send("Меня зовут Джон");
// };

// socket.onmessage = function(event) {
//   alert(`[message] Данные получены с сервера: ${event.data}`);
// };

// socket.onclose = function(event) {
//   if (event.wasClean) {
//     alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
//   } else {
//     // например, сервер убил процесс или сеть недоступна
//     // обычно в этом случае event.code 1006
//     alert('[close] Соединение прервано');
//   }
// };

// socket.onerror = function(error) {
//     console.log('err',error)
//   alert(`[error]`);
//};
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
