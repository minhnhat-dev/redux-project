import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from '../UserInfo';
import ActionsBar from '../ActionsBar';
import './PostDetail.scss';

// {
//     id: faker.random.uuid(),
//     title: 'Hay nói đạo lý',
//     achievements: [],
//     heighthUrl: '250px',
//     width: '300px',
//     height: '400px',
//     color: '#FFC542',
//     marginLeft: '10px',
//     photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
//     content: faker.lorem.words()
// },
const photoUrl = `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`;
function PostDetail(props) {
    return (
        <div className="posts-detail">
            <div className="posts-detail__img">
                <img src={photoUrl} alt="" />
            </div>

            <div className="posts-detail__right-bar">
                <div className="posts-detail__right-bar__user">
                    <UserInfo />
                </div>
                <div className="posts-detail__right-bar__actions">
                    <ActionsBar />
                </div>
            </div>
        </div>
    );
}

PostDetail.propTypes = {

};

export default PostDetail;
