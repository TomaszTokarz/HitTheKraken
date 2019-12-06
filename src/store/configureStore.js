import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import accountReducer from '../reducers/account';
import reportReducer from '../reducers/reports';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            account: accountReducer,
            report: reportReducer,
        }),
        composeEnhancers(applyMiddleware(thunk)),
    );

    return store;
};
