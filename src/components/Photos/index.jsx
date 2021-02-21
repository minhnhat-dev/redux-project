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
                        className="photo-item"
                        style={{ backgroundColor: item.id === clickId ? 'crimson' : 'lightcyan' }}
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
