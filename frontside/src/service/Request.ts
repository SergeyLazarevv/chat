import axios from 'axios'
import router from '../router'
import { useStore } from "vuex"

export default class Request {
    
    public static async send(axiosConfig: any) {

        const store = useStore();

        axiosConfig.headers = {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            "authorization": localStorage.getItem('token')
        }
        axiosConfig.url = 'http://localhost:8000/' + axiosConfig.url
        return axios(axiosConfig).then(response => {
            if(response.data == 'BAD_AUTH') {
                localStorage.removeItem('token')
				store.dispatch('chgTemplate', 'login')
				router.push('/')
            } else {
                return response
            }
        })
    }
} 