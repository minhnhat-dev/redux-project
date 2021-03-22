import { accountService } from '../services/account.service';

export function jwtInterceptor(axios) {
    axios.interceptors.request.use((request) => {
        // add auth header with jwt if account is logged in and request is to the api url
        const token = localStorage.getItem('token') || '';
        // console.log('account', account);
        // const isLoggedIn = !!account.user;
        // const isApiUrl = request.url.startsWith(process.env.REACT_APP_API_URL_PRIVATE);

        // if (isLoggedIn && isApiUrl) {
        //     request.headers.common.Authorization = `Bearer ${token}`;
        // }
        request.headers.common.Authorization = `${token}`;
        return request;
    });
}
