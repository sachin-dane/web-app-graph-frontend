/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import moment from 'moment';
import Header from '../../ui/Header'
import Sidebar from '../../ui/Sidebar'
import Footer from '../../ui/Footer'
import { fetchSitesListRequest } from '../../../state/actions/siteListActions'
import NoRecordFound from '../../ui/NoRecordFound'
import ModalComponent from '../../ui/ModalComponent'
class Sites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            modalBody: "",
            title: "",
            currentObject: {}
        };
        this.props.fetchSitesListRequest()
    }
    userRowClick = (e, item) => {
        e.preventDefault();
        let obj = {
            site_name: item.site_name,
            status: item.status
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
        console.log("Site List props==>>>", this.props)
        return (
            <div>
                <main>
                    <Sidebar />
                    <div className='userList'>
                        <div className="row justify-content-center">
                            <div className="col-sm-4">
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
                        <div className="row justify-content-center">
                            <div className="col-sm-45 mt-5 pt-4">
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
                            <ModalComponent showModal={this.state.showModal}
                                modalBody={this.state.modalBody}
                                onCloseHandler={this.modleToggleHandler}
                                title="Hang On"
                            />
                        </div>
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
        fetchSitesListRequest: () => dispatch(fetchSitesListRequest()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sites);
