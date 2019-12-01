import React from 'react';
import styled from 'styled-components';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Game from '../components/Game';

const App = styled.div`
    margin: 0;
    font-family: 'Margarine', cursive;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(./img/background-ship.jpg) center center;
        filter: blur(5px);
    }

    & h1 {
        position: relative;
    }
`;

const Wrapper = styled.div`
    position: relative;
    height: 100%;
`;

export const history = createHistory();

const NotFound = () => <div>Not Found</div>;

const Routes = () => (
    <Router history={history}>
        <App>
            <Wrapper>
                <Switch>
                    <PrivateRoute path="/" component={Game} />
                    <Route component={NotFound} />
                </Switch>
            </Wrapper>
        </App>
    </Router>
);

export default Routes;
