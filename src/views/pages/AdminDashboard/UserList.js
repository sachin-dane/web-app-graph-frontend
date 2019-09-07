/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { find } from 'lodash';
import moment from 'moment';
import Header from '../../ui/Header'
import Sidebar from '../../ui/Sidebar'
import Footer from '../../ui/Footer'
import { fetchUserListRequest, activateUserRequest, deleteUserRequest } from '../../../state/actions/userListActions'
import NoRecordFound from '../../ui/NoRecordFound'
import ModalComponent from '../../ui/ModalComponent'

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            modalBody: "",
            title: "",
            currentObject: {},
            userRole: [
                { value: 1, label: 'Admin' },
                { value: 2, label: 'Developer' },
                { value: 3, label: 'Reveiwer' }
            ]
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

    deleteeUser = (e, id) => {
        e.preventDefault()
        this.props.deleteUserRequest({ id: id })
    }

    updateSelectItemList = field => items => {
        console.log('field, items ==>>', field, items)
        this.setState({
            [field]: items,
            loaded: true
        });
        this.setState(
            {
                [field]: items,
                loaded: true
            },
            () => {
                this.props.fetchSitesByidRequest(items.value)
            }
        );


    };

    render() {
        console.log("User List props==>>>", this.state)
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
                            {!this.props.userListData.userList.isLoading &&
                                this.props.userListData.userList.userList &&
                                this.props.userListData.userList.userList.length ? (
                                    <div className="">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="sm-case">
                                                        <div>First name</div>
                                                    </th>
                                                    <th scope="col" className="sm-case text-left">
                                                        <div>Last Name</div>
                                                    </th>
                                                    <th scope="col" className="sm-case text-left">
                                                        <div>Email</div>
                                                    </th>
                                                    <th scope="col" className="sm-case text-left">
                                                        <div>User Role</div>
                                                    </th>
                                                    <th scope="col" className="sm-case text-left">
                                                        <div>Status</div>
                                                    </th>
                                                    <th scope="col" className="sm-case text-left">
                                                        <div>Action</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.userListData.userList.userList.map((item, index) => {
                                                    return (
                                                        <tr key={`tablelist${index + 1}`} >
                                                            <td style={{ cursor: "pointer" }} onClick={(e) => this.userRowClick(e, item)}>{item.firstname}</td>
                                                            <td style={{ cursor: "pointer" }} onClick={(e) => this.userRowClick(e, item)}>{item.lastname}</td>
                                                            <td style={{ cursor: "pointer" }} onClick={(e) => this.userRowClick(e, item)}>{item.email}</td>
                                                            <td style={{ cursor: "pointer" }} onClick={(e) => this.userRowClick(e, item)}>{item.role}</td>
                                                            <td style={{ cursor: "pointer" }} >
                                                                {
                                                                    item.status == 0 ? <button type="button" class="btn btn-primary btn-xs" onClick={(e) => this.activateUser(e, item.id)}>Activate</button> : 'Active User'
                                                                }
                                                            </td>
                                                            <td style={{ cursor: "pointer" }} >
                                                                <button type="button" class="btn btn-danger btn-xs" onClick={(e) => this.deleteeUser(e, item.id)}>delete</button>
                                                            </td>
                                                            <td>
                                                                <div>

                                                                </div>
                                                            </td>
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
                                                this.props.userListData.userList.isLoading
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
        deleteUserRequest: data => dispatch(deleteUserRequest(data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);
