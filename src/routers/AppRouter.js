import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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

const MainPage = () => <div>Main page</div>;

const HitTheKraken = () => (
    <BrowserRouter>
        <App>
            <Wrapper>
                <Switch>
                    <Route path="/" component={LoginPage} exact={true} />
                    <Route path="/main" component={MainPage} />
                    <Route component={MainPage} />
                </Switch>
            </Wrapper>
        </App>
    </BrowserRouter>
);

HitTheKraken.displayName = 'Hit the Kraken';

export default HitTheKraken;
