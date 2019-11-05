import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputComponent = styled.input`
    box-sizing: border-box;
    width: 100%;
    line-height: 60px;
    font-size: 25px;
    margin: 0 0 20px;
    border: none;
    padding: 0 20px;
    transition: all 0.3s ease-in-out;
    background: rgba(255, 255, 255, 0.5);
    color: #3d6242;

    &:focus {
        background: rgba(255, 255, 255, 1);
        outline: none;
    }
`;

class Input extends React.Component {
    render() {
        const { type, placeholder, value, onChange } = this.props;

        return (
            <InputComponent
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        );
    }
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;
