import React from 'react';
import styled from 'styled-components';

import Header from '../../components/main/Header';
import MenuButton from '../../components/modal/menu/MenuButton';
import PlayersList from '../../components/menu/PlayersList';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const MenuContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
`;

const CreateGame = () => (
    <Wrapper>
        <Header />
        <MenuContainer>
            <h1>Create Game</h1>
            <PlayersList />

            <MenuButton name="Start Game" href="/game" />
            <MenuButton name="Return" href="/" />
        </MenuContainer>
    </Wrapper>
);

export default CreateGame;
