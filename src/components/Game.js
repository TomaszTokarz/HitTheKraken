import React from 'react';
import styled from 'styled-components';

import Header from '../components/main/Header';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const Game = () => (
    <Wrapper>
        <Header />
        <h1>Release The KRAKEN! ARRRGGGHH</h1>;
    </Wrapper>
);

export default Game;
