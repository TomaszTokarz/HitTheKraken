import React from 'react';
import styled from 'styled-components';

import Input from '../modal/form/Input';
import Button from '../modal/form/Button';
import { firebase } from '../../database/firebase';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const LoginWindow = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.5);
    padding: 20px;

    & form {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
    };

    loginChanged = event => {
        const email = event.target.value;
        this.setState(() => ({ email }));
    };

    passwordChanged = event => {
        const password = event.target.value;
        this.setState(() => ({ password }));
    };

    logIn = event => {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(function(error) {
                console.log(error);
            });
    };

    render() {
        const { login, password } = this.state;

        return (
            <Wrapper>
                <LoginWindow>
                    <h1>KRAKEN logo</h1>
                    <h3>AVAST! enlist yourself, scum</h3>

                    <form onSubmit={this.logIn}>
                        <Input
                            type="text"
                            placeholder="Who are you, pirate?"
                            value={login}
                            onChange={this.loginChanged}
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={this.passwordChanged}
                        />
                        <Button value="Get on board" />
                    </form>
                </LoginWindow>
            </Wrapper>
        );
    }
}
