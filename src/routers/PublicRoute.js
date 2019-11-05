import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route
        {...rest}
        component={props =>
            isAuthenticated ? <Redirect to="/main" /> : <Component {...props} />
        }
    />
);

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool,
    component: PropTypes.func,
};

const mapStateToProps = state => ({
    isAuthenticated: !!state.account.uid,
});

export default connect(mapStateToProps)(PublicRoute);
