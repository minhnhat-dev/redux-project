import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Main from './pages/Main';
import DetailPost from './pages/DetailPost';

function Posts(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={`${match.url}`} component={Main} />
            <Route path={`${match.url}/:postId`} component={DetailPost} />
        </Switch>
    );
}

Posts.propTypes = {

};

export default Posts;
