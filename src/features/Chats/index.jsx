import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Main from './pages/Main';
import Chat from './pages/Chat';

function Chats(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.url}`} component={Main} />
            <Route path={`${match.url}/:roomName`} component={Chat} />
        </Switch>
    );
}

Chats.propTypes = {

};

export default Chats;
