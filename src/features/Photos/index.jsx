import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, Route, Switch } from 'react-router-dom';
import { AddPhotos, Main } from './pages';

function Photos(props) {
    const match = useRouteMatch();
    console.log('Photos match', match);
    return (
        <Switch>
            <Route exact path={`${match.url}`} component={Main} />
            <Route path={`${match.url}/add/`} component={AddPhotos} />
        </Switch>
    );
}

Photos.propTypes = {

};

export default Photos;
