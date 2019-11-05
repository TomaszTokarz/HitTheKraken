import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from '../components/main/Header';

const MainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route
        {...rest}
        component={props =>
            isAuthenticated ? (
                <div>
                    <Header></Header>
                    <MainWrapper>
                        <Component {...props} />
                    </MainWrapper>
                </div>
            ) : (
                <Redirect to="/" />
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
