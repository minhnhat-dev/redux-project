import clientApi from './clientApi';

const userApi = {
    loginFacebook: (params) => {
        const url = '/login/facebook';
        return clientApi.post(url, params);
    }
};

export default userApi;
