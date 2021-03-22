import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import Card from '../PhotoCard';

function PhotoList(props) {
    const photos = useSelector((state) => state.photo.photos);

    return (
        <Row>
            {photos && photos.map((photo) => (
                <Col xs="6" md="3" sm="4">
                    <Card photo={photo} />
                </Col>
            ))}
        </Row>
    );
}

PhotoList.propTypes = {

};

export default PhotoList;
