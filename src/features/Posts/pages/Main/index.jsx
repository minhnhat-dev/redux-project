import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';
import { Container, Row, Col } from 'reactstrap';
import HeaderBox from '../../components/HeaderBox';
import PostDetail from '../../components/PostDetail';
import './Main.scss';

const photosDefault = [
    {
        id: faker.random.uuid(),
        title: 'Hay nói đạo lý',
        achievements: [],
        heighthUrl: '250px',
        width: '300px',
        height: '400px',
        color: '#FFC542',
        marginLeft: '10px',
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: 'Thích thể hiện',
        achievements: [],
        heighthUrl: '190px',
        width: '400px',
        height: '340px',
        color: '#3ED598',
        marginTop: '40px',
        marginBottom: '20px',
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: 'Thích thể hiện',
        achievements: [],
        heighthUrl: '130px',
        width: '280px',
        height: '280px',
        color: '#A29BFE',
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: 'Thích thể hiện',
        achievements: [],
        heighthUrl: '130px',
        width: '200px',
        height: '280px',
        color: '#148BFF',
        marginTop: '30px',
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: 'Thích thể hiện',
        achievements: [],
        heighthUrl: '190px',
        width: '450px',
        height: '340px',
        marginLeft: '195px',
        color: '#FF565E',
        marginTop: '20px',
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: 'Thích thể hiện',
        achievements: [],
        heighthUrl: '150px',
        width: '350px',
        height: '300px',
        color: '#6C5CE7',
        marginTop: '10px',
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: 'Thích thể hiện',
        achievements: [],
        heighthUrl: '130px',
        width: '180px',
        height: '280px',
        color: '#FF7675',
        marginTop: '30px',
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: 'Hay nói đạo lý',
        achievements: [],
        heighthUrl: '250px',
        width: '230px',
        height: '400px',
        color: '#FFC542',
        marginLeft: '10px',
        marginTop: '10px',
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    }
];

function Main(props) {
    const imgUrl = `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`;
    return (
        <Container fluid>
            <Row className="posts-banner">
                {
                    photosDefault.map((item) => <HeaderBox config={item} />)
                }
                <svg className="posts-banner__svg-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#30444E" fillOpacity="0.7" d="M0,128L48,117.3C96,107,192,85,288,112C384,139,480,213,576,208C672,203,768,117,864,69.3C960,21,1056,11,1152,21.3C1248,32,1344,64,1392,80L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                </svg>
            </Row>
            <Row className="posts-list">
                <Col xs="12" md="6" className="posts-list__center">
                    <PostDetail />
                </Col>
            </Row>
        </Container>
    );
}

Main.propTypes = {

};

export default Main;
