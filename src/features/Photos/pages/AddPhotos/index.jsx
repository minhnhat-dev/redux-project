import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import FormPhoto from '../../components/FormPhoto';
import { addPhoto, photoSelector } from '../../photoSlice';

import './AddPhotos.scss';

function AddPhotos(props) {
    const history = useHistory();
    const photos = useSelector(photoSelector);
    const dispatch = useDispatch();

    function handleOnSubmit(values) {
        dispatch(addPhoto(values));
        history.push('/');
    }

    return (
        <section className="box-input">
            <Row>
                <Col xs="auto">
                    <FormPhoto onSubmit={handleOnSubmit} />
                </Col>
            </Row>
        </section>
    );
}

AddPhotos.propTypes = {

};

export default AddPhotos;
