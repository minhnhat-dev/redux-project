import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
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
            <ul>
                {photos.map((item) => (
                    <li
                        onClick={() => handleOnClickItem(item.id)}
                        key={item.id}
                        className={item.id === clickId ? 'photo-item photo-item-active' : 'photo-item'}
                    >
                        {item.fileName}
                    </li>
                ))}
            </ul>
        </>
    );
}

Photos.propTypes = {

};

export default Photos;
