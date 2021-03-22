import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Header from '../Header';
import NotFound from '../NotFound';
import Banner from '../Banner';
import PrivateRoute from './PrivateRoute';
import Login from '../../features/Login';

const Home = React.lazy(() => import('../../features/Home'));
const Photos = React.lazy(() => import('../../features/Photos'));

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        is_private: true
    },
    {
        path: '/login',
        component: Login,
        exact: true,
        is_private: true
    },
    {
        path: '/register',
        component: Login,
        exact: true,
        is_private: true
    },
    {
        path: '/photos',
        component: Photos,
        title: 'Photos',
        is_private: true
    }
];

function Routes() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Router>
                    <Header />
                    <Banner />
                    <Switch>
                        {routes.map((route, i) => {
                            const { is_private: isPrivate, exact } = route;
                            console.log('exact', !!exact);
                            return (
                                <Route
                                    exact={!!exact}
                                    path={route.path}
                                    key={i.toString()}
                                    component={route.component}
                                />
                            );
                        })}
                    </Switch>
                </Router>
            </Suspense>
        </>
    );
}

export default Routes;
