<template>
    <div class="form-demo" style='width:50%;margin:0 auto;'>
        <Dialog :breakpoints="{ '960px': '80vw' }" :style="{ width: '30vw' }" position="top">
            <div class="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
                <i class="pi pi-check-circle" :style="{fontSize: '5rem', color: 'var(--green-500)' }"></i>
                <h5>Registration Successful!</h5>
                <p :style="{lineHeight: 1.5, textIndent: '1rem'}">
                    Your account is registered under name <b>{{state.name}}</b> ; it'll be valid next 30 days without activation. Please check <b>{{state.email}}</b> for activation instructions.
                </p>
            </div>
            <template #footer>
                <div class="p-d-flex p-jc-center">
                    <Button label="OK" @click="toggleDialog" class="p-button-text" />
                </div>
            </template>
        </Dialog>

        <div class="p-d-flex p-jc-center">
            <div class="card">
                <h5 class="p-text-center">Регистрация</h5>
                <form @submit.prevent="" class="p-fluid">
                    <div class="p-field">
                        <div class="p-float-label">
                            <InputText id="name" />
                            <label for="name" >Name*</label>
                        </div>
                      
                    </div>
                    <div class="p-field">
                        <div class="p-float-label p-input-icon-right">
                            <i class="pi pi-envelope" />
                            <InputText id="email" aria-describedby="email-error"/>
                            <label for="email">Email*</label>
                        </div>
      
                    </div>
                    <div class="p-field">
                        <div class="p-float-label">
                            <Password id="password" toggleMask>
                                <template #header>
                                    <h6>Pick a password</h6>
                                </template>
                                <template #footer="sp">
                                    {{sp.level}}
                                    <Divider />
                                    <p class="p-mt-2">Suggestions</p>
                                    <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
                                        <li>At least one lowercase</li>
                                        <li>At least one uppercase</li>
                                        <li>At least one numeric</li>
                                        <li>Minimum 8 characters</li>
                                    </ul>
                                </template>
                            </Password>
                            <label for="password">Password*</label>
                        </div>
                    </div>
                    <Button type="submit" label="Submit" class="p-mt-2" />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue';
import CountryService from '../service/CountryService';

export default {
    setup() {
        onMounted(() => {
            countryService.value.getCountries().then(data => countries.value = data);
        })

        const state = reactive({
            name: '',
            email: '',
            password: '',
            accept: null
        });

        const countryService = ref(new CountryService());
        const submitted = ref(false);
        const countries = ref();
        const showMessage = ref(false);

        //const v$ = useVuelidate(rules, state);

        const handleSubmit = (isFormValid) => {
            submitted.value = true;

            if (!isFormValid) {
                return;
            }

            toggleDialog();
        }

        const toggleDialog = () => {
            showMessage.value = !showMessage.value;
        
            if(!showMessage.value) {
                resetForm();
            }
        }

        const resetForm = () => {
            state.name = '';
            state.email = '';
            state.password = '';
            state.date = null;
            state.country = null;
            state.accept = null;
            submitted.value = false;
        }

        return { state, 
                 handleSubmit, 
                 toggleDialog,  
                 submitted, 
                 countries, 
                 showMessage, 
                 date, 
                 country }
    }
}
</script>

<style lang="scss" scoped>
.form-demo {
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
