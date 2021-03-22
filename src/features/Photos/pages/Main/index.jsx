import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Button } from 'reactstrap';
import PhotoList from '../../components/PhotoList';
import postsApi from '../../../../api/postsApi';
import './Main.scss';

function Main(props) {
    async function handleGetPosts(params) {
        const posts = await postsApi.getPosts();
        console.log('posts', posts);
    }
    return (
        <Container className="photo-main">
            <Row>
                <Button
                    size="md"
                    color="danger"
                    onClick={handleGetPosts}
                >
                    Get Posts
                </Button>
            </Row>
            <PhotoList />
        </Container>
    );
}

Main.propTypes = {

};

export default Main;
