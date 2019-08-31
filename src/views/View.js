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

const routes = [
    {
        component: DashboardContainer,
        path: '/dashboard/security-posture',
        exact: true
    }
    // {
    //     component: Incidents,
    //     path: '/alerts'
    // },
    // {
    //     component: AnalyzeContainer,
    //     path: '/analyze'
    // },
    // {
    //     component: ThreatIntelContainer,
    //     path: '/threat-intel',
    //     exact: true,
    //     operation: 'view',
    //     resource: 'configure'
    // },
    // {
    //     component: ConfigureContainer,
    //     path: '/configure',
    //     operation: 'view',
    //     resource: 'configure'
    // }
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
            authenticated: false,
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
        const permission = userAbilities(user).can(operation, resource);
        return permission;
    };

    generateRoutes = user => {
        /* eslint-disable consistent-return, array-callback-return */
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
                <Redirect exact from="/" to="/dashboard/security-posture" />
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

                        {this.generateRoutes(this.props.user)}
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
                        this.nonLoginGenerateRoutes(this.props.user)
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
        user: state.app.user
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
