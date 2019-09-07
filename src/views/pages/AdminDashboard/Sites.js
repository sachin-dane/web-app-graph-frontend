/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import moment from 'moment';
import Header from '../../ui/Header'
import Select from 'react-select';
import SimpleReactValidator from 'simple-react-validator';
import Sidebar from '../../ui/Sidebar'
import Footer from '../../ui/Footer'
import { fetchSitesListRequest, createSiteRequest, resetCreateSite } from '../../../state/actions/siteListActions'
import { fetchUserListRequest } from '../../../state/actions/userListActions'
import NoRecordFound from '../../ui/NoRecordFound'
import SiteModal from '../../ui/SiteModal'

class Sites extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            showModal: false,
            modalBody: "",
            title: "",
            currentObject: {},
            userListOptions: [],
            isCreteSiteShow: false,
            selectedType: '',
            siteTypeOptions: [
                { value: 1, label: 'Active' },
                { value: 2, label: 'Proposed' },
                { value: 0, label: 'Inactive' }
            ],
            form: {
                site_name: '',
                site_type: null,
                obj1Lifetime: null,
                obj1Instantaneous: null,
                obj2Lifetime: null,
                obj2Instantaneous: null,
                obj3Lifetime: null,
                obj3Instantaneous: null,
            }
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

        if (nextProps.siteListData.createSite.createSite) {
            this.setState({
                isCreteSiteShow: false
            }, () => {
                this.props.resetCreateSite();
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
    createSiteClick = (e) => {
        e.preventDefault()
        if (!this.state.isCreteSiteShow) {
            this.setState({
                isCreteSiteShow: true
            })
        } else {
            this.setState({
                isCreteSiteShow: false
            })
        }
    }
    updateSelectedTypeList = field => items => {
        console.log('field, items ==>>', field, items)
        this.setState({
            ...this.state,
            [field]: items,
            loaded: true,
            form: {
                ...this.state.form,
                site_type: Number(items.value)
            }
        });
    };
    inputChangeHandler = (event) => {
        this.setState(Object.assign({}, this.state, {
            form: Object.assign({}, this.state.form, {
                [event.target.name]: event.target.value
            })
        }))
    }

    onSignupInClick = (e) => {
        e.preventDefault()
        if (this.validator.allValid()) {
            let payload = {
                site_name: this.state.form.site_name,
                site_type: Number(this.state.form.site_type),
                obj1Lifetime: Number(this.state.form.obj1Lifetime),
                obj1Instantaneous: Number(this.state.form.obj1Instantaneous),
                obj2Lifetime: Number(this.state.form.obj2Lifetime),
                obj2Instantaneous: Number(this.state.form.obj2Instantaneous),
                obj3Lifetime: Number(this.state.form.obj3Lifetime),
                obj3Instantaneous: Number(this.state.form.obj3Instantaneous),
            }
            console.log('Payload ==>>', payload)
            this.props.createSiteRequest(payload)
            // this.props.signupRequested(this.state.form)
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }
    getStatus = (statusId) => {
        let status = ''
        if (statusId === 0) status = 'Inactive'
        else if (statusId === 1) status = 'Active'
        if (statusId === 2) status = 'Proposed'
        return status
    }
    render() {
        console.log("Site List props==>>>", this.state)
        return (
            <div>
                <main>
                    <Sidebar />
                    <div className='siteList'>
                        <div className="row justify-content-end site-toggle-btn">
                            <div className='cols-sm-4'>
                                <h1>{this.state.isCreteSiteShow ? 'Create Site' : 'Site List'}</h1>
                            </div>
                            <div className='cols-sm-8 site-btns'>
                                <button type="button" className="btn btn-primary" onClick={(e) => this.state.isCreteSiteShow ? this.createSiteClick(e) : null}>Site List</button>
                                <button type="button" className="btn btn-primary assing-user-btn" onClick={(e) => this.state.isCreteSiteShow ? null : this.createSiteClick(e)}> Create Site</button>
                            </div>
                        </div>
                        {
                            !this.state.isCreteSiteShow ?
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
                                                                    <td>{this.getStatus(item.status)}</td>
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
                                :
                                <div>
                                    <form className='create-site-form'>
                                        <div className="registration-title">
                                            <h5>Create Site Form</h5>
                                        </div>
                                        <hr />
                                        <div className="row justify-content-center">
                                            <div className="col-sm-4">
                                                <input type="text" className="form-control"
                                                    name='site_name'
                                                    placeholder="Enter Site name value"
                                                    value={this.state.form.site_name}
                                                    onChange={(e) => this.inputChangeHandler(e)}
                                                />
                                                <span style={{ color: '#d54b50' }}>
                                                    {' '}
                                                    {this.validator.message(
                                                        'Site name',
                                                        this.state.form.site_name,
                                                        ['required']
                                                    )}
                                                </span>

                                            </div>
                                            <div className="col-sm-4">
                                                <Select
                                                    value={this.state.selectedType}
                                                    onChange={this.updateSelectedTypeList(
                                                        'selectedType'
                                                    )}
                                                    options={this.state.siteTypeOptions}
                                                    className="multi-select"
                                                    classNamePrefix="multi-select"
                                                    isSearchable={true}
                                                    placeholder="Select site type"
                                                />
                                                <span style={{ color: '#d54b50' }}>
                                                    {' '}
                                                    {this.validator.message(
                                                        'Site type ',
                                                        this.state.form.site_type,
                                                        ['required']
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-sm-4">
                                                <input type="text"
                                                    className="form-control"
                                                    name='obj1Lifetime'
                                                    placeholder="Enter Object_1 Lifetime value"
                                                    value={this.state.form.obj1Lifetime}
                                                    onChange={(e) => this.inputChangeHandler(e)}
                                                />
                                                <span style={{ color: '#d54b50' }}>
                                                    {' '}
                                                    {this.validator.message(
                                                        'Obj1 lifetime ',
                                                        this.state.form.obj1Lifetime,
                                                        ['required', 'integer']
                                                    )}
                                                </span>
                                            </div>
                                            <div className="col-sm-4">
                                                <input type="text"
                                                    className="form-control"
                                                    name='obj1Instantaneous'
                                                    placeholder="Enter Object_1 Instantaneous value"
                                                    value={this.state.form.obj1Instantaneous}
                                                    onChange={(e) => this.inputChangeHandler(e)}
                                                />
                                                <span style={{ color: '#d54b50' }}>
                                                    {' '}
                                                    {this.validator.message(
                                                        'Obj1 Instantaneous ',
                                                        this.state.form.obj1Instantaneous,
                                                        ['required', 'integer']
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-sm-4">
                                                <input type="text"
                                                    className="form-control"
                                                    name='obj2Lifetime'
                                                    placeholder="Enter Object_2 Lifetime value"
                                                    value={this.state.form.obj2Lifetime}
                                                    onChange={(e) => this.inputChangeHandler(e)}
                                                />
                                                <span style={{ color: '#d54b50' }}>
                                                    {' '}
                                                    {this.validator.message(
                                                        'Obj2 lifetime ',
                                                        this.state.form.obj2Lifetime,
                                                        ['required', 'integer']
                                                    )}
                                                </span>
                                            </div>
                                            <div className="col-sm-4">
                                                <input type="text"
                                                    className="form-control"
                                                    name='obj2Instantaneous'
                                                    placeholder="Enter Object_2 Instantaneous value"
                                                    value={this.state.form.obj2Instantaneous}
                                                    onChange={(e) => this.inputChangeHandler(e)}
                                                />
                                                <span style={{ color: '#d54b50' }}>
                                                    {' '}
                                                    {this.validator.message(
                                                        'Obj2 Instantaneous ',
                                                        this.state.form.obj2Instantaneous,
                                                        ['required', 'integer']
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-sm-4">
                                                <input type="text"
                                                    className="form-control"
                                                    name='obj3Lifetime'
                                                    placeholder="Enter Object_3 Lifetime value"
                                                    value={this.state.form.obj3Lifetime}
                                                    onChange={(e) => this.inputChangeHandler(e)}
                                                />
                                                <span style={{ color: '#d54b50' }}>
                                                    {' '}
                                                    {this.validator.message(
                                                        'Obj3 lifetime ',
                                                        this.state.form.obj3Lifetime,
                                                        ['required', 'integer']
                                                    )}
                                                </span>
                                            </div>
                                            <div className="col-sm-4">
                                                <input type="text"
                                                    className="form-control"
                                                    name='obj3Instantaneous'
                                                    placeholder="Enter Object_3 Instantaneous value"
                                                    value={this.state.form.obj3Instantaneous}
                                                    onChange={(e) => this.inputChangeHandler(e)}
                                                />
                                                <span style={{ color: '#d54b50' }}>
                                                    {' '}
                                                    {this.validator.message(
                                                        'Obj3 Instantaneous ',
                                                        this.state.form.obj3Instantaneous,
                                                        ['required', 'integer']
                                                    )}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="row justify-content-center signup-btn">
                                            <div className="col-sm-4">
                                                <button type="submit" class="btn btn-block btn-primary"
                                                    onClick={(e) => this.onSignupInClick(e)}
                                                >Submit</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                        }


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
        createSiteRequest: data => dispatch(createSiteRequest(data)),
        fetchSitesListRequest: () => dispatch(fetchSitesListRequest()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sites);
