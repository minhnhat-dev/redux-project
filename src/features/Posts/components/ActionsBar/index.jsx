import React from 'react';
import PropTypes from 'prop-types';
import './ActionsBar.scss';

function ActionsBar(props) {
    return (
        <div className="actions-bar">
            <div className="actions-bar__box">
                <i className="far fa-laugh" />
                <p>4 Thích</p>
            </div>
            <div className="actions-bar__box">
                <i className="fas fa-medal" />
                <p>Hot Trend</p>
            </div>
            <div className="actions-bar__box">
                <i className="far fa-comment" />
                <p>3 Bình Luận</p>
            </div>
            <div className="actions-bar__box">
                <i className="fas fa-share-alt" />
                <p>10 Chia sẽ</p>
            </div>
        </div>
    );
}

ActionsBar.propTypes = {

};

export default ActionsBar;
