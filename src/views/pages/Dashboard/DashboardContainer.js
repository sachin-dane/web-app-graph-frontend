/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { Chart } from "react-google-charts";
import Select from 'react-select';
import Sidebar from '../../ui/Sidebar'
import { fetchUserSitesRequest, fetchSitesByidRequest } from '../../../state/actions/siteListActions'

class DashboardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSitesList: [],
            proposedSitesList: [],
            inactiveSitesList: []
        };
        console.log('dasboard props=>>>', this.props)
        this.props.fetchUserSitesRequest(this.props.loginData.userData.id)
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
    componentWillReceiveProps(nextProps) {
        if (nextProps.userSites.siteList) {
            this.setState({
                activeSitesList: nextProps.userSites.siteList.activeSites,
                proposedSitesList: nextProps.userSites.siteList.proposeddSites,
                inactiveSitesList: nextProps.userSites.siteList.inactiveSites
            })
        }
    }

    getStatus = (statusId) => {
        let status = ''
        if (statusId === 0) status = 'Inactive Site'
        else if (statusId === 1) status = 'Active Site'
        if (statusId === 2) status = 'Proposed Site'
        return status
    }

    render() {
        console.log('User Dashboard state==>>', this.props)
        return (
            <div>
                <Sidebar />
                <section className='dashboard-section'>
                    <div className="sites-tabs">
                        <div className="row justify-content-center">
                            <div className="col-sm-4">
                                <div>
                                    <h5>Active Sitess </h5>
                                </div>
                                <div>
                                    <Select
                                        value={this.state.activeSites}
                                        onChange={this.updateSelectItemList(
                                            'activeSites'
                                        )}
                                        options={this.state.activeSitesList}
                                        className="multi-select"
                                        classNamePrefix="multi-select"
                                        isSearchable={false}
                                        placeholder="Select Active Site"
                                    />
                                </div>

                            </div>
                            <div className="col-sm-4">
                                <div>
                                    <h5>Proposed Sites</h5>
                                </div>
                                <div>
                                    <Select
                                        value={this.state.proposedSites}
                                        onChange={this.updateSelectItemList(
                                            'proposedSites'
                                        )}
                                        options={this.state.proposedSitesList}
                                        className="multi-select"
                                        classNamePrefix="multi-select"
                                        isSearchable={false}
                                        placeholder="Select Proposed Site"
                                    />
                                </div>

                            </div>
                            <div className="col-sm-4">
                                <div>
                                    <h5>Inactive Sites</h5>
                                </div>
                                <div>
                                    <Select
                                        value={this.state.inactiveSites}
                                        onChange={this.updateSelectItemList(
                                            'inactiveSites'
                                        )}
                                        options={this.state.inactiveSitesList}
                                        className="multi-select"
                                        classNamePrefix="multi-select"
                                        isSearchable={false}
                                        placeholder="Select Inactive Site"
                                    />
                                </div>

                            </div>
                        </div>

                    </div>
                    {
                        this.props.sitesById.isLoading ?
                            <div class="loading"></div>
                            :
                            Object.keys(this.props.sitesById.siteList).length > 0 && this.props.sitesById.siteList.status === 1 ?
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <div className='graph-detail'>
                                            <Chart
                                                width={'500px'}
                                                height={'360px'}
                                                chartType="ColumnChart"
                                                loader={<div>Loading Chart</div>}
                                                data={this.props.sitesById.siteList.lifetimeObj}
                                                options={{
                                                    // Material design options
                                                    title: `Site Name : ${this.props.sitesById.siteList.siteName}`,
                                                    hAxis: {
                                                        title: 'Event Date',
                                                    },
                                                    vAxis: {
                                                        title: 'Lifetime Value'
                                                    }
                                                }}
                                                // For tests
                                                rootProps={{ 'data-testid': '2' }}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='graph-detail'>
                                            <Chart
                                                width={'500px'}
                                                height={'360px'}
                                                chartType="ColumnChart"
                                                loader={<div>Loading Chart</div>}
                                                data={this.props.sitesById.siteList.instantaneousObj}
                                                options={{
                                                    // Material design options
                                                    title: `Site Name : ${this.props.sitesById.siteList.siteName}`,
                                                    hAxis: {
                                                        title: 'Event Date',
                                                    },
                                                    vAxis: {
                                                        title: 'Instantaneous Value'
                                                    }
                                                }}
                                                // For tests
                                                rootProps={{ 'data-testid': '2' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                :
                                Object.keys(this.props.sitesById.siteList).length > 0 ?

                                    <>
                                        <div className='row'>
                                            <div className='show-site-details'>
                                                Site Details
                                        </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-6'>
                                                <table>
                                                    <tr>
                                                        <td>Site Name</td>
                                                        <td>{this.props.sitesById.siteList.siteName}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div className='col-sm-6'>
                                                <table>
                                                    <tr>
                                                        <td>Status</td>
                                                        <td>{this.getStatus(this.props.sitesById.siteList.status)}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-6'>
                                                <table>
                                                    <tr>
                                                        <td>Status</td>
                                                        <td>{this.getStatus(this.props.sitesById.siteList.status)}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div className='col-sm-6'>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>Status</td>
                                                            <td>{this.getStatus(this.props.sitesById.siteList.status)}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    < div className='no-records-found'>
                                        <i>No Records Found</i>
                                    </div>
                    }

                </section>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        loginData: state.login.loginData,
        userSites: state.siteList.sitesListData.userSites,
        sitesById: state.siteList.sitesListData.sitesById
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserSitesRequest: data => dispatch(fetchUserSitesRequest(data)),
        fetchSitesByidRequest: data => dispatch(fetchSitesByidRequest(data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardContainer);
