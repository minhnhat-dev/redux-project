import React, { useEffect } from 'react';
import { Row, Container, Col } from 'reactstrap';
import { useHistory, useRouteMatch } from 'react-router-dom';
import FormLogin from './components/FormLogin';
import FromRegister from './components/FromRegister';
import { accountService } from '../../services/account.service';
import './Login.scss';
import BannerLeft from '../../assets/images/banner2.png';

function Login(props) {
    const history = useHistory();
    const match = useRouteMatch();
    const { path } = match;
    console.log('path', path);
    const titleName = path === '/login' ? 'Đăng nhập' : 'Đăng ký';

    async function handleLoginFaceBook(params) {
        const { authResponse } = await new Promise(window.FB.login);
        const result = await accountService.apiAuthenticate(authResponse);
        // if (result && result.token) history.push('/');
    }

    return (
        <>
            <Container>
                <Row className="login-box">
                    <Col xs="12" sm="6" md="6">
                        <div className="login-box__left">
                            <div className="login-box__background">
                                <div className="login-box__background__form">
                                    <p className="login-box__background__form__header">{titleName}</p>
                                    {
                                        path === '/login'
                                            ? <FormLogin className="login-box__background__form__input" />
                                            : <FromRegister className="login-box__background__form__input" />
                                    }
                                    <div className="login-box__background__form__buttons">
                                        <button type="button" className="login-box__background__form__buttons__facebook">
                                            <i className="fab fa-facebook-square front-size-20 padding-right-10 icon-facebook" />
                                            {' '}
                                            Đăng nhập với Facebook
                                        </button>
                                        <button type="button" className="login-box__background__form__buttons__email">
                                            <i className="fas fa-envelope front-size-20 padding-right-10 icon-facebook" />
                                            {' '}
                                            Đăng nhập với Gmail
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </Col>

                    <Col xs="12" sm="6" md="6">
                        <img src={BannerLeft} alt="" />
                    </Col>
                </Row>
            </Container>

        </>
    );
}
export default Login;
