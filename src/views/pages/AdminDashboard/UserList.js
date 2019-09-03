/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import moment from 'moment';
import Header from '../../ui/Header'
import Sidebar from '../../ui/Sidebar'
import Footer from '../../ui/Footer'
import { fetchUserListRequest, activateUserRequest } from '../../../state/actions/userListActions'
import NoRecordFound from '../../ui/NoRecordFound'
import ModalComponent from '../../ui/ModalComponent'

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            modalBody: "",
            title: "",
            currentObject: {}
        };
        this.props.fetchUserListRequest()
    }

    userRowClick = (e, item) => {
        e.preventDefault();
        this.modleToggleHandler(true, item)
    }
    modleToggleHandler = (status, body) => {
        this.setState(Object.assign({}, this.state, {
            showModal: status,
            modalBody: body
        }))
    }
    activateUser = (e, id) => {
        e.preventDefault()
        let payload = {
            id: id,
            status: 1
        }
        this.props.activateUserRequest(payload)
    }

    render() {
        console.log("User List props==>>>", this.props)
        return (
            <div>
                <main>
                    <Sidebar />
                    <div className='userList'>
                        <div className="row justify-content-center">
                            <div className="col-sm-4">
                                <h2 className="secondary-title yellow-text">
                                    Uset List
                                </h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            {!this.props.userListData.isLoading &&
                                this.props.userListData.userList &&
                                this.props.userListData.userList.length ? (
                                    <div className="">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="sm-case">
                                                        <div>First name</div>
                                                    </th>
                                                    <th scope="col" className="sm-case text-right">
                                                        <div>Last Name</div>
                                                    </th>
                                                    <th scope="col" className="sm-case text-right">
                                                        <div>Email</div>
                                                    </th>
                                                    <th scope="col" className="sm-case text-right">
                                                        <div>Status</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.userListData.userList.map((item, index) => {
                                                    return (
                                                        <tr key={`tablelist${index + 1}`} style={{ cursor: "pointer" }} onClick={(e) => this.userRowClick(e, item)}>
                                                            <td>{item.firstname}</td>
                                                            <td>{item.lastname}</td>
                                                            <td>{item.email}</td>
                                                            <td>
                                                                {
                                                                    item.status == 0 ? <button type="button" class="btn btn-primary btn-xs" onClick={(e) => this.activateUser(e, item.id)}>Activate</button> : 'Active User'
                                                                }</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div class="col-sm-4">
                                        <NoRecordFound
                                            isloading={
                                                this.props.userListData.isLoading
                                            }
                                            loadingSizeCLass="sm-loading-block"
                                        />
                                    </div>
                                )}
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-sm-45 mt-5 pt-4">
                                {

                                }
                            </div>
                        </div>
                        <ModalComponent showModal={this.state.showModal}
                            modalBody={this.state.modalBody}
                            onCloseHandler={this.modleToggleHandler}
                            title="Hang On"
                        />
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
        activateUserRequest: data => dispatch(activateUserRequest(data)),


    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);
