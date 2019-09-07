/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import moment from 'moment';
import Header from '../../ui/Header'
import Sidebar from '../../ui/Sidebar'
import Footer from '../../ui/Footer'
import { fetchSitesListRequest } from '../../../state/actions/siteListActions'
import { fetchUserListRequest } from '../../../state/actions/userListActions'
import NoRecordFound from '../../ui/NoRecordFound'
import SiteModal from '../../ui/SiteModal'
class Sites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            modalBody: "",
            title: "",
            currentObject: {},
            userListOptions: []
        };
        this.props.fetchSitesListRequest()
        this.props.fetchUserListRequest()
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.userListData.userList && nextProps.userListData.userList.userList.length > 0) {
            let userOptions = []
            nextProps.userListData.userList.userList.map(item => {
                let data = {
                    value: item.id,
                    label: `${item.firstname} ${item.lastname} `
                }
                userOptions.push(data)
            })

            this.setState({
                userListOptions: userOptions,
            })
        }
    }

    userRowClick = (e, item) => {
        e.preventDefault();
        let obj = {
            site_name: item.site_name,
            status: item.status,
            id: item.id,
            options: this.state.userListOptions
        }
        this.modleToggleHandler(true, obj)
    }
    modleToggleHandler = (status, body) => {
        this.setState(Object.assign({}, this.state, {
            showModal: status,
            modalBody: body
        }))
    }
    render() {
        console.log("Site List props==>>>", this.state)
        return (
            <div>
                <main>
                    <Sidebar />
                    <div className='siteList'>
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <h2 className="secondary-title yellow-text">
                                    Site List
                                </h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            {!this.props.siteListData.allSites.isLoading &&
                                this.props.siteListData.allSites.siteList &&
                                this.props.siteListData.allSites.siteList.length ? (
                                    <div className="col-sm-7">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="sm-case">
                                                        <div>Site name</div>
                                                    </th>
                                                    <th scope="col" className="sm-case text-right">
                                                        <div>Status</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.siteListData.allSites.siteList.map((item, index) => {
                                                    return (
                                                        <tr key={`tablelist${index + 1}`} style={{ cursor: "pointer" }} onClick={(e) => this.userRowClick(e, item)}>
                                                            <td>{item.site_name}</td>
                                                            <td>{item.status}</td>
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
                                                this.props.siteListData.allSites.isLoading
                                            }
                                            loadingSizeCLass="sm-loading-block"
                                        />
                                    </div>
                                )}
                        </div>
                        <SiteModal showModal={this.state.showModal}
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
        userListData: state.userList.userListData,
        siteListData: state.siteList.sitesListData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserListRequest: data => dispatch(fetchUserListRequest(data)),
        fetchSitesListRequest: () => dispatch(fetchSitesListRequest()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sites);
