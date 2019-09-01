/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import moment from 'moment';
import Header from '../../ui/Header'
import Sidebar from '../../ui/Sidebar'
import Footer from '../../ui/Footer'
import { fetchUserListRequest } from '../../../state/actions/userListActions'
import NoRecordFound from '../../ui/NoRecordFound'

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props.fetchUserListRequest()
    }

    render() {
        console.log("User List props==>>>", this.props)
        return (
            <div>
                <main>
                    <Sidebar />
                    <div className="row justify-content-center">
                            <div className="col-12">
                                <h2 className="secondary-title yellow-text">
                                    Uset List
                                </h2>
                            </div>
                            {!this.props.userListData.isLoading &&
                                this.props.userListData.userList &&
                                this.props.userListData.userList.length ? (
                                    <div className="col-7">
                                        <div className="clearfix">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="sm-case">
                                                            <div>Rule name</div>
                                                        </th>
                                                        <th scope="col" className="sm-case text-right">
                                                            <div>Alerts Count</div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.props.userListData.userList.map((item, index) => {
                                                        return (
                                                            <tr key={`tablelist${index + 1}`}>
                                                                <td>{item.firstname}</td>
                                                                <td>{item.lastname}</td>
                                                                <td>{item.email}</td>
                                                                <td className="text-right">
                                                                    {item.incidents_count}
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : (
                                    <div class="col">
                                        <NoRecordFound
                                            isloading={
                                                this.props.userListData.isLoading
                                            }
                                            loadingSizeCLass="sm-loading-block"
                                        />
                                    </div>
                                )}

                            <div className="col-5 mt-5 pt-4">
                                <div className="clearfix">
                                    {
                                        //     this.props.trends &&
                                        // this.props.trends.current &&
                                        // this.props.trends.current.data &&
                                        // Object.keys(this.props.trends.current.data)
                                        //     .length > 0
                                        //     ? (
                                        // <HorizontalBar
                                        //     data={this.threadData()}
                                        //     width={270}
                                        //     orientation="right"
                                        //     config={VERTICAL_BAR[0]}
                                        //     show="topThreatInEsoc"
                                        //     style={threadStyle}
                                        //     yAxisKey="name"
                                        //     barDataKey="threat"
                                        //     yAxisWidth={120}
                                        //     clickHandler={this.topThreadHandler}
                                        // />
                                        // ) : (
                                        // <NoRecordFound
                                        //     isloading={
                                        //         this.props.trends.isLoading
                                        //     }
                                        //     loadingSizeCLass="sm-loading-block"
                                        // />
                                        // )
                                    }
                                </div>
                            </div>
                            {/* <div class="col">
                                <NoRecordFound
                                    isloading={
                                        // this.props.trends.isLoading
                                        false
                                    }
                                    loadingSizeCLass="sm-loading-block"
                                />
                            </div> */}

                    </div>
                </main>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        loginData: state.login.loginData,
        userListData: state.userList.userListData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserListRequest: data => dispatch(fetchUserListRequest(data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);
