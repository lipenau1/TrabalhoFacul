import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001'
})

export default {
    login: async params => {
        const request = await instance.get(`/user/login`, { params: params });

    
        return request.data;
    },
}