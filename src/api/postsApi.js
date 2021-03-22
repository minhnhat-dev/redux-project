import clientApi from './clientApi';

const postsApi = {
    getPosts: (params) => {
        const url = '/posts';
        return clientApi.get(url, params);
    }
};

export default postsApi;
