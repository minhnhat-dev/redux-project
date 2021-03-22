import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './PhotoForm.scss';
import { getPhoto } from '../../features/Photos/photoSlice';

function getRandomPhoto() {
    const randomId = Math.trunc(Math.random() * 200);
    const url = `https://picsum.photos/id/${randomId}/300/300`;
    return url;
}

function PhotoForm(props) {
    const { name, imageUrl, onChangePhoto, onBlurChangePhoto } = props;

    function handleOnClickChangeImage() {
        const urlImage = getRandomPhoto();
        onChangePhoto(urlImage);
    }

    return (
        <div className="box-from-photo">
            <Button
                className="box-from-photo__button"
                name={name}
                outline
                color="info"
                id="photo"
                onBlur={onBlurChangePhoto}
                onClick={handleOnClickChangeImage}
            >
                Random A Photo

            </Button>
            <div>
                <img
                    className="box-from-photo__image"
                    src={imageUrl}
                    alt="Ooops ... not found. Please click random again!"
                    onError={handleOnClickChangeImage}
                    width="300"
                    height="300"
                />
            </div>
        </div>
    );
}

PhotoForm.propTypes = {

};

export default PhotoForm;
