import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import accountReducer from '../reducers/account';
import reportReducer from '../reducers/reports';
import gameReducer from '../reducers/game';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            account: accountReducer,
            report: reportReducer,
            game: gameReducer,
        }),
        composeEnhancers(applyMiddleware(thunk)),
    );

    return store;
};
