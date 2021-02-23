import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Header from '../Header';
import NotFound from '../NotFound';

const Home = React.lazy(() => import('../../features/Home'));
const Photos = React.lazy(() => import('../../features/Photos'));
const Users = React.lazy(() => import('../../features/Users'));

const routes = [
    {
        path: '/photos',
        component: Photos,
        title: 'Photos'
    },
    {
        path: '/users',
        component: Users,
        title: 'Users'
    }
];

function Routes() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        {routes.map((route, i) => (
                            <Route
                                path={route.path}
                                key={i.toString()}
                                component={route.component}
                            />
                        ))}
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Suspense>
        </>
    );
}

export default Routes;
