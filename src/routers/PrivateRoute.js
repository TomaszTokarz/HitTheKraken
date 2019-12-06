import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import LoginPage from '../components/main/LoginPage';

const MainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route
        {...rest}
        component={props =>
            isAuthenticated ? (
                <MainWrapper>
                    <Component {...props} />
                </MainWrapper>
            ) : (
                <LoginPage />
            )
        }
    />
);

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool,
    component: PropTypes.func,
};

const mapStateToProps = state => ({
    isAuthenticated: !!state.account.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
