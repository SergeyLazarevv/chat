import axios from 'axios'

export default class CountryService {
    
    getCountries() {
        return axios.get('/src/countries.json').then(res => res.data.data);
    }
} 