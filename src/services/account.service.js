/* eslint-disable consistent-return */
import { history } from '../helpers/history';
import userApi from '../api/userApi';

export const accountService = {
    login,
    logout,
    apiAuthenticate
};

async function login() {
    // login with facebook then authenticate with the API to get a JWT auth token
    const { authResponse } = await new Promise(window.FB.login);
    if (!authResponse) return;
    return apiAuthenticate(authResponse.accessToken);
}

async function apiAuthenticate(authResponse) {
    // authenticate with the api using a facebook access token,
    // on success the api returns an account object with a JWT auth token
    const response = await userApi.loginFacebook(authResponse);

    if (response && response.token) localStorage.setItem('token', response.token);

    return response;
}

function logout() {
    // revoke app permissions to logout completely because FB.logout() doesn't remove FB cookie
    // window.FB.api('/me/permissions', 'delete', null, () => window.FB.logout());
    // stopAuthenticateTimer();
    // accountSubject.next(null);
    // history.push('/login');
}
