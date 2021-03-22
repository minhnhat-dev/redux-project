import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import { Main, Login } from './pages';

function Home(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.url}`} component={Main} />
        </Switch>
    );
}

Home.propTypes = {

};

export default Home;
