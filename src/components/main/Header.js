import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../modal/form/Button';
import { logOut } from '../../database/firebase';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Header = ({ name }) => (
    <Wrapper>
        <div>{name}</div>
        <Button value="Abandon ship!" onClick={logOut} />
    </Wrapper>
);

Header.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = state => ({
    name: state.account.displayName,
});

export default connect(mapStateToProps)(Header);
