import React from 'react';
import styled from 'styled-components';

import Header from '../../components/main/Header';
import MenuButton from '../../components/modal/menu/MenuButton';

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

const MainMenu = () => (
    <Wrapper>
        <Header />
        <MenuContainer>
            <h1>Release The KRAKEN! ARRRGGGHH</h1>
            <MenuButton name="Join Game" href="/join" />
            <MenuButton name="Create Game" href="/create" />
            <MenuButton name="Statistics" href="/statistics" />
            <MenuButton name="Rules" href="/rules" />
        </MenuContainer>
    </Wrapper>
);

export default MainMenu;
