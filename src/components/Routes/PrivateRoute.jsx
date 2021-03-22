import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => {
                // const account = accountService.accountValue;
                const account = { user: null };
                // if (!account.user) {
                // // not logged in so redirect to login page with the return url
                //     return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
                // }
                // authorized so return component
                return <Component {...props} />;
            }}
        />
    );
}

export default PrivateRoute;
