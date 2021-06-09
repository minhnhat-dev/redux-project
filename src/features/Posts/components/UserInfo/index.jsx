import React from 'react';
import PropTypes from 'prop-types';
import './UserInfo.scss';

const photoUrl = `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`;

function UserInfo(props) {
    return (
        <div className="user">
            <div className="user__info">
                <img src={photoUrl} alt="" />
                <p>Nguyễn Minh Nhật</p>
            </div>
            <div className="user__notify">
                <div className="user__notify__news">
                    <i className="fas fa-newspaper" />
                    <p>14 bài viết</p>
                </div>
                <div className="user__notify__icons">
                    <i className="fas fa-bell" />
                    <i className="fas fa-user-plus" />
                </div>
            </div>
        </div>
    );
}

UserInfo.propTypes = {

};

export default UserInfo;
