import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/style/style.scss';
import { initFacebookSdk } from './helpers';

// wait for facebook sdk before startup
initFacebookSdk().then(startApp());

function startApp() {
    ReactDOM.render(
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>,
        document.getElementById('root')
    );
}
