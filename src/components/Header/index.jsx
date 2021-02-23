import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header(props) {
    return (
        <header>
            <Container fluid>
                <Row className="header">
                    <Col xs="auto">
                        <NavLink
                            exact
                            to="/"
                            className="header__title front-size-30"
                            activeClassName="header__title--active"
                        >
                            Home
                        </NavLink>
                    </Col>
                    <Col xs="auto">
                        <NavLink
                            to="/photos"
                            className="header__title"
                            activeClassName="header__title--active"
                        >
                            Photos
                        </NavLink>
                    </Col>
                    <Col xs="auto">
                        <NavLink
                            to="/photos/add"
                            className="header__title"
                            activeClassName="header__title--active"
                        >
                            Add Photos
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

Header.propTypes = {

};

export default Header;
