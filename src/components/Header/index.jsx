import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header(props) {
    const [account, setAccount] = useState(null);
    useEffect(() => {
        setAccount({ user: null });
        // accountService.account.subscribe((x) => setAccount(x));
    }, []);

    return (
        <header>
            <Container fluid>
                <Row className="header">
                    {/* // xs="12" sm="6" md="6" */}
                    <Col xs="12" sm="6" md="6" className="header__logo">
                        <h3>Logo</h3>
                    </Col>
                    <Col xs="12" sm="6" md="6">
                        <div className="header__link-right">
                            <NavLink
                                exact
                                to="/"
                                className="header__title"
                                activeClassName="header__title--active"
                            >
                                Trang chủ
                            </NavLink>
                            <NavLink
                                to="/hot-trends"
                                className="header__title"
                                activeClassName="header__title--active"
                            >
                                Hot Trends
                            </NavLink>
                            <NavLink
                                to="/categories"
                                className="header__title"
                                activeClassName="header__title--active"
                            >
                                Danh mục
                            </NavLink>
                            <NavLink
                                to="/login"
                                className="header__title"
                                activeClassName="header__title--active"
                            >
                                Đăng nhập
                            </NavLink>
                        </div>

                    </Col>
                </Row>
            </Container>
        </header>
    );
}

Header.propTypes = {

};

export default Header;
