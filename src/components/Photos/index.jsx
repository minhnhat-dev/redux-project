import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import './Photos.scss';

function Photos(props) {
    const {
        photos = [],
        onClickItem = null,
        clickId = ''
    } = props;

    function handleOnClickItem(id) {
        onClickItem(id);
    }

    return (
        <>
            {photos && photos.map((photo) => (
                <Card className="photo-item">
                    <CardImg top width="100%" src={photo.photoUrl}alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">{photo.title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted" />
                        <CardText>{photo.content}</CardText>
                        <Button outline onClick={handleOnClickItem}>See Detail</Button>
                    </CardBody>
                </Card>
            )) }
        </>
    );
}

Photos.propTypes = {

};

export default Photos;
