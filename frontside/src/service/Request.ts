import axios from 'axios'
import router from '../router'

export default class Request {
    
    public static async send(axiosConfig: any) {
        return axios(axiosConfig).then(response => {
            if(response.data == 'BAD_AUTH') {
                router.push('login')
            } else {
                return response
            }
        })
    }
} 