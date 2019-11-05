import React from 'react';
import styled from 'styled-components';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Game from '../components/Game';
import LoginPage from '../components/main/LoginPage';

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

const HitTheKraken = () => (
    <Router history={history}>
        <App>
            <Wrapper>
                <Switch>
                    <PublicRoute path="/" component={LoginPage} exact={true} />
                    <PrivateRoute path="/main" component={Game} />
                    <Route component={NotFound} />
                </Switch>
            </Wrapper>
        </App>
    </Router>
);

HitTheKraken.displayName = 'Hit the Kraken';

export default HitTheKraken;
