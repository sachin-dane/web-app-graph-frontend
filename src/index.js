import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ErrorBoundary from './helpers/ErrorBoundary';
import App from './App';
import store from './state/store';

ReactDOM.render(
    <ErrorBoundary>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </ErrorBoundary>,
    document.getElementById('root')
);

// Enable hot reloading
if (module.hot) module.hot.accept();
