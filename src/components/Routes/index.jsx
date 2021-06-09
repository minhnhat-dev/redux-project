import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Header from '../Header';
import NotFound from '../NotFound';
import About from '../../features/About';
import PrivateRoute from './PrivateRoute';
import Login from '../../features/Login';
import Posts from '../../features/Posts';
import Chats from '../../features/Chats';

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
        path: '/hot-trends',
        component: Posts,
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
        path: '/categories',
        component: Login,
        exact: true,
        is_private: false
    },
    {
        path: '/about',
        component: About,
        exact: true,
        is_private: true
    }
    // {
    //     path: '/photos',
    //     component: Photos,
    //     title: 'Photos',
    //     is_private: true
    // },
    // {
    //     path: '/chats',
    //     component: Chats,
    //     title: 'Chats',
    //     is_private: true
    // }
];

function Routes() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Router>
                    <Header />
                    <Switch>
                        {routes.map((route, i) => {
                            const { is_private: isPrivate, exact } = route;
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
