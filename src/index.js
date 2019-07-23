import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BicyclestoreService from './services/bicyclestore-service ';
import { BicyclestoreServiceProvider } from './components/bicyclestore-service-context';

import './index.css';

import store from './store';


const bicyclestoreService = new BicyclestoreService();



ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BicyclestoreServiceProvider value={ bicyclestoreService }>
                <Router>
                    <App />
                </Router>
            </BicyclestoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root'));





