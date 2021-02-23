import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Login, Register, Main } from './pages';

function Users(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.url}`} component={Main} />
            <Route path={`${match.url}/login`} component={Login} />
            <Route path={`${match.url}/register`} component={Register} />
        </Switch>
    );
}

Users.propTypes = {

};

export default Users;
