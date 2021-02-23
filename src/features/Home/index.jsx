import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import { Main } from './pages';

function Home(props) {
    const match = useRouteMatch();
    console.log('match', match);
    return (
        <Switch>
            <Route path={`${match.url}`} component={Main} />
        </Switch>
    );
}

Home.propTypes = {

};

export default Home;
