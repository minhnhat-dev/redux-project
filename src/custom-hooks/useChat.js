import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';

const USER_JOIN_CHAT_EVENT = 'USER_JOIN_CHAT_EVENT';
const USER_LEAVE_CHAT_EVENT = 'USER_LEAVE_CHAT_EVENT';
const NEW_CHAT_MESSAGE_EVENT = 'NEW_CHAT_MESSAGE_EVENT';
const START_TYPING_MESSAGE_EVENT = 'START_TYPING_MESSAGE_EVENT';
const STOP_TYPING_MESSAGE_EVENT = 'STOP_TYPING_MESSAGE_EVENT';
const SOCKET_SERVER_URL = 'http://120.0.0.1:3001';
const SERVER_URL = 'http://120.0.0.1:5000';

const useChat = () => {
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState();
    const socketRef = useRef();

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get('https://api.randomuser.me/');
            const result = response.data.results[0];
            setUser({
                name: result.name.first,
                picture: result.picture.thumbnail
            });
        };

        fetchUser();
    }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get(
                `${SERVER_URL}/rooms/${roomId}/users`
            );
            const result = response.data.users;
            setUsers(result);
        };

        fetchUsers();
    }, [roomId]);

    useEffect(() => {
        const fetchMessages = async () => {
            const response = await axios.get(
                `${SERVER_URL}/rooms/${roomId}/messages`
            );
            const result = response.data.messages;
            setMessages(result);
        };

        fetchMessages();
    }, [roomId]);

    const sendMessage = (messageBody) => {
        if (!socketRef.current) return;
        socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
            body: messageBody,
            senderId: socketRef.current.id,
            user
        });
    };

    // const startTypingMessage = () => {
    //     if (!socketRef.current) return;
    //     socketRef.current.emit(START_TYPING_MESSAGE_EVENT, {
    //         senderId: socketRef.current.id,
    //         user
    //     });
    // };

    // const stopTypingMessage = () => {
    //     if (!socketRef.current) return;
    //     socketRef.current.emit(STOP_TYPING_MESSAGE_EVENT, {
    //         senderId: socketRef.current.id,
    //         user
    //     });
    // };

    return {
        messages,
        user,
        users,
        sendMessage
    };
};

export default useChat;
