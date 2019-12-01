import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { onAuthStateChanged } from './database/database';
import { logIn, logOut } from './actions/account';

const store = configureStore();
let hasRendered = false;

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

onAuthStateChanged(user => {
    renderApp();

    if (user) {
        const { displayName, email, uid } = user;
        store.dispatch(logIn(displayName, email, uid));
    } else {
        store.dispatch(logOut());
    }
});
