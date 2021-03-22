import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Row } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { useHistory } from 'react-router-dom';
import FormLogin from './components/FormLogin';
import userApi from '../../api/userApi';
import { accountService } from '../../services/account.service';
import './Login.scss';

function Login(props) {
    const history = useHistory();

    async function handleLoginFaceBook(params) {
        const { authResponse } = await new Promise(window.FB.login);
        const result = await accountService.apiAuthenticate(authResponse);
        if (result && result.token) history.push('/');
    }

    return (
        <>
            <p className="text-center">Page Login</p>
            <Button
                type="button"
                color="primary"
                className="text-center"
                onClick={handleLoginFaceBook}
            >
                Login with facebook
            </Button>
            <Row className="login">
                <FormLogin />
            </Row>
        </>
    );
}

Login.propTypes = {

};

export default Login;
