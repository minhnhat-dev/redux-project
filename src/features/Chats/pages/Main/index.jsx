import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { Button, Container, Row } from 'reactstrap';

function Main(props) {
    const history = useHistory();
    const [room, setRoom] = useState('');
    const [name, setName] = useState('');

    function handleJoinRoom() {
        history.push(`/chats/${room}?user_name=${name}`);
    }

    function handleOnChangeRoom(e) {
        const roomName = e.target.value || '';
        setRoom(roomName);
    }

    function handleOnChangeUserName(e) {
        const userName = e.target.value || '';
        setName(userName);
    }
    return (
        <Container>
            <Row>
                <p>Room name</p>
                <input type="Room Name" onChange={handleOnChangeRoom} />
                <input type="Your Name" onChange={handleOnChangeUserName} />
                <Button color="info" onClick={handleJoinRoom}>
                    Join room
                </Button>
            </Row>
        </Container>
    );
}

Main.propTypes = {

};

export default Main;
