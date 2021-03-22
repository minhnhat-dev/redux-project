import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import PhotoList from '../../../Photos/components/PhotoList';

import './Main.scss';

function Main(props) {
    const photos = useSelector((state) => state.photo.photos);
    return (
        <Row className="home_center">
            <div className="home padding-bottom-30">
                <p className="home__text">Home Page</p>

                <div className="home__login">
                    <NavLink
                        to="/login"
                        className="padding-right-10"
                    >
                        <Button size="lg" outline color="primary">Login</Button>
                    </NavLink>
                    <NavLink
                        to="/register"
                    >
                        <Button size="lg" outline color="primary">Register</Button>
                    </NavLink>
                </div>
            </div>
            <PhotoList />
        </Row>
    );
}

Main.propTypes = {

};

export default Main;
