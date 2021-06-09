import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import queryString from 'query-string';
import Peer from 'peerjs';
import InfoBar from '../../components/InfoBar';
import MessageBox from '../../components/MessageBox';
import ChatForm from '../../components/ChatForm';
import './Chat.scss';

const myPeer = new Peer(undefined, {
    host: '/',
    port: '3001'
});
const peers = {};
let socket;
const peerConnections = {};
const config = {
    iceServers: [
        {
            urls: 'stun:stun.l.google.com:19302'
        }
    ]
};
function Chat(props) {
    const { roomName } = useParams();
    const { location } = props;
    const { user_name: userName } = queryString.parse(location.search);

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const videoRef = useRef();
    const [videos, setVideos] = useState([]);
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'http://127.0.0.1:3001';

    const videoGrid = document.getElementById('video-grid');
    const myVideo = document.createElement('video');

    useEffect(() => {
        socket = io(ENDPOINT);
        setRoom(roomName);
        setName(userName);
        const data = {
            roomName,
            userName
        };

        socket.emit('join', data, (error) => {
            if (error) {
                alert(error);
            }
        });
    }, [ENDPOINT, room]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((msgs) => [...msgs, message]);
        });

        socket.on('roomData', ({ users }) => {
            setUsers(users);
        });

        myPeer.on('open', (id) => {
            console.log('myPeer id:', id);
            socket.emit('join-room', 'ROOM_ID', id);
        });

        socket.on('user-disconnected', (userId) => {
            if (peers[userId]) peers[userId].close();
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    function getStream(params) {
        const constraints = {
            video: true,
            audio: true
        };
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(gotStream)
            .catch(handleError);
        return navigator.mediaDevices.enumerateDevices();
    }

    function handleError(error) {
        console.error('Error: ', error);
    }

    function gotStream(stream) {
        addVideoStream(myVideo, stream);
        myPeer.on('call', (call) => {
            call.answer(stream);
            const video = document.createElement('video');
            call.on('stream', (userVideoStream) => {
                addVideoStream(video, userVideoStream);
            });
        });

        socket.on('user-connected', (userId) => {
            console.log('userId', userId);
            connectToNewUser(userId, stream);
        });
    }

    function connectToNewUser(userId, stream) {
        const call = myPeer.call(userId, stream);
        const video = document.createElement('video');
        call.on('stream', (userVideoStream) => {
            addVideoStream(video, userVideoStream);
        });
        call.on('close', () => {
            video.remove();
        });

        peers[userId] = call;
    }

    function addVideoStream(video, stream) {
        video.srcObject = stream;
        video.autoplay = true;
        const newVideos = [...videos, video];
        setVideos(newVideos);
        videoGrid.append(video);
    }

    return (
        <Container>
            <Row>
                <Col xs="8" sm="8" className="chat-box">
                    <InfoBar room={room} />
                    <MessageBox messages={messages} name={name} />
                    <ChatForm
                        message={message}
                        setMessage={setMessage}
                        sendMessage={sendMessage}
                    />
                    <button type="button" onClick={getStream}>Stream</button>
                </Col>
                <div id="video-grid" />
            </Row>
        </Container>
    );
}

Chat.propTypes = {

};

export default Chat;
