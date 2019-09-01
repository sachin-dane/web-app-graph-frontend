/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { find } from 'lodash';
import moment from 'moment';

class TableView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log('Login Sidebar Data==>>', this.props)
        return (
            <table className={this.props.configureStyle.tableStyle}>
                <thead>
                    <tr className={this.props.configureStyle.headRowStyle}>
                        {this.props.tableHeader.map(header => (
                            <th className={header.style}>
                                <div>{header.name}</div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {this.props.data &&
                        this.props.data.map(res => {
                            return (
                                <>
                                    <tr
                                        key={
                                            Math.floor(
                                                Math.random() * (+1000 - +1)
                                            ) + +1
                                        }
                                    >
                                        {Object.keys(res).map(
                                            (data1, innerIndex) => (
                                                <td
                                                    key={
                                                        Math.floor(
                                                            Math.random() *
                                                            (+1000 - +1)
                                                        ) + +1
                                                    }
                                                    className={
                                                        Object.keys(res).length -
                                                            innerIndex ===
                                                            1
                                                            ? this.props.configureStyle.bodyColumnStyle
                                                            : null
                                                    }
                                                >
                                                    {res[data1]}
                                                </td>
                                            )
                                        )}
                                    </tr>
                                </>
                            );
                        })}
                </tbody>
            </table>
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
)(TableView);
