import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, changeClickId } from '../../redux/actions/photo.action';
import { randomPhoto } from './HomePage.helpers';
import Photos from '../Photos';

function HomePage(props) {
    const photoList = useSelector((state) => state.photo.list);
    const clickId = useSelector((state) => state.photo.clickId);
    const dispatch = useDispatch();

    function handleOnClick(params) {
        const photo = randomPhoto();
        const actionAddPhoto = addPhoto(photo);
        dispatch(actionAddPhoto);
    }

    function handleOnClickItem(id) {
        const actionChangeClickId = changeClickId(id);
        dispatch(actionChangeClickId);
    }

    return (
        <>
            <p>Home</p>
            <Photos
                onClickItem={handleOnClickItem}
                photos={photoList}
                clickId={clickId}
            />
            <button type="button" onClick={handleOnClick}>Add photo</button>
        </>
    );
}

HomePage.propTypes = {

};

export default HomePage;
