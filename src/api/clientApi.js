import axios from 'axios';
import queryString from 'query-string';
import { jwtInterceptor, errorInterceptor } from '../helpers';

console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL);
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json'
    },
    paramsSerializer: (params) => queryString.stringify(params)
});

jwtInterceptor(axiosClient);
errorInterceptor(axiosClient);

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        console.log('response.data', response.data);
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error;
});

export default axiosClient;
