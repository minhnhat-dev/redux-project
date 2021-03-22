import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { useHistory, useParams } from 'react-router-dom';
import { deletePhoto } from '../../photoSlice';

import './PhotoCard.scss';

function PhotoCard(props) {
    const { photo = {}, onClickItem } = props;
    const [showContent, setShowContent] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    function handleOnClickItem(id) {
        onClickItem(id);
    }

    function handleEditClick(photoClick) {
        const { id } = photoClick;
        const urlEdit = `/photos/update/${id}`;
        history.push(urlEdit);
    }

    function handleRemoveClick(photoClick) {
        const { id } = photoClick;
        const action = deletePhoto(id);
        dispatch(action);
    }

    function handleOnMouseOver() {
        setShowContent(true);
    }

    function handleOnMouseOut(params) {
        setShowContent(false);
    }

    return (
        <div className="photo">
            <img src={photo.photoUrl} alt={photo.title} />

            <div className="photo__overlay">
                <h3 className="photo__title">{photo.title}</h3>
                <Button
                    className="photo__content__button"
                    outline
                    size="sm"
                    color="light"
                    onMouseOver={handleOnMouseOver}
                    onMouseOut={handleOnMouseOut}
                >
                    Show more
                </Button>

                <div className={showContent ? 'photo__content__display' : 'photo__content__none'}>
                    <p className="photo__content__text">{photo.content}</p>
                </div>

                <div className="photo__actions">
                    <div>
                        <Button outline size="sm" color="light" onClick={() => handleEditClick(photo)}>
                            Edit
                        </Button>
                    </div>

                    <div>
                        <Button outline size="sm" color="danger" onClick={() => handleRemoveClick(photo)}>
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

PhotoCard.propTypes = {

};

export default PhotoCard;
