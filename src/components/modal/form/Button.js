import React from 'react';
import styled from 'styled-components';

const InputButton = styled.input`
    line-height: 40px;
    font-size: 30px;
    background: #3d6242;
    color: #5eae5f;
    border: none;
    outline: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        background: #5eae5f;
        color: #3d6242;
    }
`;

export default class Button extends React.Component {
    render() {
        const { value } = this.props;

        return <InputButton type="submit" value={value} />;
    }
}
