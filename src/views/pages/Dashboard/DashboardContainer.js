/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import Sidebar from '../../ui/Sidebar'

class DashboardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSitesList: [
                { value: '1', label: 'Natural Gas' },
                { value: '2', label: 'Emergin Technologies' },
                { value: '3', label: 'Power Generation' },
            ],
            proposedSitesList: [
                { value: '1', label: 'Retail Energy' },
                { value: '2', label: 'IT Industry' },
            ],
            inactiveSitesList: [
                { value: '1', label: 'Construction' },
                { value: '2', label: 'Hospital' },
            ]
        };
    }
    updateSelectItemList = field => items => {
        this.setState({
            [field]: items,
            loaded: true
        });
    };
    render() {
        console.log('User Dashboard state==>>', this.state)
        return (
            <div>

                <main>
                    <Sidebar />
                    <section>
                        <div className="sites-tabs">
                            <div className="row justify-content-center">
                                <div className="col-sm-4">
                                    <div>
                                        <h3>Active Sitess </h3>
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
                                        <h3>Proposed Sites</h3>
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
                                        <h3>Inactive Sites</h3>
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
                    </section>
                </main>

            </div >
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
)(DashboardContainer);
