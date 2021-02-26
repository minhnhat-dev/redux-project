import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Photo from '../../../../components/Photos';

import './Main.scss';

function Main(props) {
    const photos = useSelector((state) => state.photo.photos);
    return (
        <Row>
            <Col xs="12" className="header-home-page">
                <div>
                    <p className="header-home-page__text">Home Page</p>
                </div>
            </Col>
            <Col>
                <div className="list-photo">
                    <Photo photos={photos} />
                </div>
            </Col>
        </Row>

    );
}

Main.propTypes = {

};

export default Main;
