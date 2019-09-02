/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { Can } from '@casl/react';
import userAbilities from '../../helpers/userAbilities'
import { find } from 'lodash';
import moment from 'moment';
import { returnRole } from '../../constants/common'

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log('Login Sidebar Data==>>', this.props)
        return (
            <aside>
                <nav>
                    <ul>

                        <Can
                            I="view"
                            a="dashboard"
                            ability={userAbilities(returnRole(this.props.loginData.userData.user_role))}
                        >
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    // data-toggle="dropdown"
                                    to="/user/dashboard"
                                    activeStyle={{ color: 'white' }}
                                    role="button"
                                >
                                    <span> Dashboard</span>
                                </NavLink>
                            </li>
                        </Can>
                        <Can
                            I="view"
                            a="profile"
                            ability={userAbilities(returnRole(this.props.loginData.userData.user_role))}
                        >
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    // data-toggle="dropdown"
                                    to="/user/profile"
                                    activeStyle={{ color: 'white' }}
                                    role="button"
                                >
                                    <span> Profile</span>
                                </NavLink>
                            </li>
                        </Can>
                        <Can
                            I="view"
                            a="users"
                            ability={userAbilities(returnRole(this.props.loginData.userData.user_role))}
                        >
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    // data-toggle="dropdown"
                                    to="/admin/users"
                                    activeStyle={{ color: 'white' }}
                                    role="button"
                                >
                                    <span> Users</span>
                                </NavLink>
                            </li>
                        </Can>
                        <Can
                            I="view"
                            a="sites"
                            ability={userAbilities(returnRole(this.props.loginData.userData.user_role))}
                        >
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    // data-toggle="dropdown"
                                    to="/admin/sites"
                                    activeStyle={{ color: 'white' }}
                                    role="button"
                                >
                                    <span> Sites</span>
                                </NavLink>
                            </li>
                        </Can>
                        <li className="nav-item"><a className="nav-link" href="#">Logout</a></li>
                        {/* <li><a href="/user/dashboard">Dashboard</a></li>
                        <li><a href="#">page 2</a></li>
                        <li><a href="#">page 3</a></li>
                        <li><a href="#">page 4</a></li>
                        <li><a href="#">page 5</a></li> */}
                    </ul>
                </nav>
            </aside>
        );
    }
}

const mapStateToProps = state => {
    return {
        loginData: state.login.loginData
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);
