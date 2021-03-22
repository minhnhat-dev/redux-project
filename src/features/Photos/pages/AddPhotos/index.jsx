import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Row, Col } from 'reactstrap';
import { useHistory, useParams } from 'react-router-dom';
import FormPhoto from '../../components/FormPhoto';
import { addPhoto, editPhoto } from '../../photoSlice';

import './AddPhotos.scss';

function AddPhotos(props) {
    const history = useHistory();
    const { photoId } = useParams();
    const photo = useSelector((state) => state.photo.photos.find((item) => item.id === photoId));
    const initValues = photoId ? photo : { title: '', content: '', category: '', photoUrl: '' };
    const dispatch = useDispatch();
    const isAddMode = !photoId;

    async function handleOnSubmit(values) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (isAddMode) {
            dispatch(addPhoto(values));
        } else {
            dispatch(editPhoto(values));
        }
        history.push('/photos');
    }

    return (
        <section className="box-input">
            <Row>
                <Col xs="auto">
                    <FormPhoto
                        isAddMode={isAddMode}
                        onSubmit={handleOnSubmit}
                        initValues={initValues}
                    />
                </Col>
            </Row>
        </section>
    );
}

AddPhotos.propTypes = {

};

export default AddPhotos;
