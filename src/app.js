import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { firebase } from './database/firebase';
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
    }
};

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        const { displayName, email, uid } = user;
        store.dispatch(logIn(displayName, email, uid));
        renderApp();

        if (history.location.pathname === '/') {
            history.push('/main');
        }
    } else {
        renderApp();
        store.dispatch(logOut());
        history.push('/');
    }
});
