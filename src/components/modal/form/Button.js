import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Button = ({ value, ...rest }) => (
    <InputButton {...rest} type="submit" value={value} />
);

Button.propTypes = {
    value: PropTypes.string,
};

export default Button;
