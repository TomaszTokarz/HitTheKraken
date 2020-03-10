import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
    font-size: 1.8em;
    line-height: 3em;
    text-decoration: none;
    padding: 0 2em;
    margin: 1em 0;
    background: #3d6242;
    color: #5eae5f;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        background: #5eae5f;
        color: #3d6242;
    }
`;

const MenuButton = ({ name, href, ...rest }) => (
    <Button {...rest} to={href}>
        {' '}
        {name}{' '}
    </Button>
);

MenuButton.propTypes = {
    name: PropTypes.string,
    href: PropTypes.string,
};

export default MenuButton;
