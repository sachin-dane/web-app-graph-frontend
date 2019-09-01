/* eslint-disable no-underscore-dangle */

import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { ToastContainer } from 'react-toastify';

import Header from './ui/Header'
import Footer from './ui/Footer'
import SignIn from './pages/HomePage/SignIn'
import SignUp from './pages/HomePage/SignUp'
import userAbilities from '../helpers/userAbilities';
import DashboardContainer from './pages/Dashboard/DashboardContainer';
import Sites from './pages/AdminDashboard/Sites'
import UserList from './pages/AdminDashboard/UserList'
import Profile from './pages/Dashboard/Profile'

const routes = [
    {
        component: DashboardContainer,
        path: '/user/dashboard',
        exact: true,
        operation: 'view',
        resource: 'dashboard'
    },
    {
        component: UserList,
        path: '/admin/users',
        exact: true,
        operation: 'view',
        resource: 'users'
    },
    {
        component: Sites,
        path: '/admin/sites',
        operation: 'view',
        resource: 'sites'
    },
    {
        component: Profile,
        path: '/user/profile',
        exact: true,
        operation: 'view',
        resource: 'profile'
    },
];

const nonLoginRoutes = [
    {
        component: SignIn,
        path: '/signin',
        exact: true
    },
    {
        component: SignUp,
        path: '/signup',
        exact: true
    },
];


class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: true,
            keycloak: null
        };
    }

    handelLogout = () => {
        this.state.keycloak.logout();
    };

    /**
     * Check if the operation is allowed for the resource
     */
    hasPermission = (operation, resource, user) => {
        console.log('user==>>>', user)
        const permission = userAbilities(user).can(operation, resource);
        return permission;
    };

    generateRoutes = user => {
        /* eslint-disable consistent-return, array-callback-return */
        console.log('generateRoutes props ==>>', user, user === 'Admin')
        return (
            <Switch>
                {routes.map(route => {
                    // For routes with permission
                    if (
                        route.operation &&
                        route.resource &&
                        this.hasPermission(
                            route.operation,
                            route.resource,
                            user
                        )
                    ) {
                        return (
                            <Route
                                exact={route.exact ? route.exact : false}
                                path={route.path}
                                component={route.component}
                                key={route.path}
                            />
                        );
                    }

                    // For routes that don't have permission
                    if (!route.operation && !route.resource) {
                        return (
                            <Route
                                exact={route.exact ? route.exact : false}
                                path={route.path}
                                component={route.component}
                                key={route.path}
                            />
                        );
                    }
                })}
                <Redirect exact to={user === 'Admin' ? '/admin/users' : '/user/dashboard'} />
                <Redirect to="/page-not-found" />
            </Switch>
        );
    };

    nonLoginGenerateRoutes = user => {
        console.log('This props ==>>', this.props)
        /* eslint-disable consistent-return, array-callback-return */
        return (
            <Switch>
                {nonLoginRoutes.map(route => {
                    // For routes with permission
                    // For routes that don't have permission
                    return (
                        <Route
                            exact={route.exact ? route.exact : false}
                            path={route.path}
                            component={route.component}
                            key={route.path}
                        />
                    );

                })}
                <Redirect exact from="/" to="/signin" />
                <Redirect to="/page-not-found" />
            </Switch>
        );
    };


    render() {
        console.log('view props ==>>', this.props);
        return (
            <>
                <Header />
                {this.state.authenticated ? (
                    <>
                        {this.generateRoutes(this.props.loginData.userData.userType)}
                        <ToastContainer
                            position="top-center"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeButton={false}
                            rtl={false}
                            pauseOnVisibilityChange
                            draggable
                            pauseOnHover
                        />

                    </>
                ) : (
                        this.nonLoginGenerateRoutes('User')
                        // <div className="page-loader">
                        //     <span />
                        //     <i />
                        // </div>
                    )}
                <Footer />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        loginData: state.login.loginData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // loginRequest: () => dispatch(loginRequested()),
        // loginSuccessfull: userData => dispatch(loginSuccessfull(userData)),
        // loginFailed: error => dispatch(loginFailure(error))
    };
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(View);
