import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';

// import configureStore from '../store/configureStore';

const Wrapper = styled.div`
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

export default class Game extends React.Component {
    render() {
        // const { addNewTask } = this.state;

        return (
            // <Provider store={store}>
            <Wrapper>
                <h1>Release The KRAKEN! ARRRGGGHH</h1>
            </Wrapper>
            // </Provider>
        );
    }
}
