/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { NavLink, Link } from 'react-router-dom';
import { find } from 'lodash';
import moment from 'moment';
import Select from 'react-select';

import { assignSiteToUserRequest } from '../../state/actions/siteListActions';

class SiteModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            selectedUser: '',
            selectedType: '',
            siteTypeOptions: [
                { value: 1, label: 'Active' },
                { value: 2, label: 'Proposed' },
                { value: 0, label: 'Inactive' }
            ],
            form: {
                site_id: this.props.modalBody.id ? this.props.modalBody.id : '',
                user_id: '',
                site_type: ''
            }
        };
    }

    handleInputChange = (newValue) => {
        this.state = { inputValue: '' }
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({ inputValue });
        return inputValue;
    };
    updateSelectItemList = field => items => {
        this.setState({
            ...this.state,
            [field]: items,
            loaded: true,
            form: {
                ...this.state.form,
                user_id: Number(items.value)
            }
        });
    };
    updateSelectedTypeList = field => items => {
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

    onSubmitclick = (e) => {
        e.preventDefault();
        if (!this.state.form.user_id) {
            toast.error('Please select user');
        } else if (this.state.form.site_type === '') {
            toast.error('Please select site type');
        } else {
            let payload = this.state.form
            payload.site_id = Number(this.props.modalBody.id)
            this.props.assignSiteToUserRequest(payload)
        }
    }

    onOkayClick = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            inputValue: '',
            selectedUser: '',
            selectedType: '',
            form: {
                site_id: '',
                user_id: '',
                site_type: ''
            }
        })
        this.props.onCloseHandler(false, '')
    }

    render() {
        return (
            <div className={this.props.showModal ? "modal fade in hangon-popup" : "modal fade"}
                tabIndex="-1"
                style={this.props.showModal ? { display: "block" } : { display: "none" }}
                role="dialog">

                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Assign Site to User</h4>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-sm-10 site-modal'>

                                    <div class="form-group site-name">
                                        <label for="email">Site Name:</label>
                                        <label for="email">{this.props.modalBody.site_name}</label>
                                    </div>
                                    <div class="form-group site-status">
                                        <label for="status">Status:</label>
                                        <label for="status">{this.props.modalBody.status}</label>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className='form-group site-modal-dropdown'>
                                        <label for="email">Select User:</label>
                                        <Select
                                            value={this.state.selectedUser}
                                            onChange={this.updateSelectItemList(
                                                'selectedUser'
                                            )}
                                            options={this.props.modalBody.options}
                                            className="multi-select"
                                            classNamePrefix="multi-select"
                                            isSearchable={true}
                                            placeholder="Select Active Site"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className='form-group site-modal-type site-modal-dropdown'>
                                        <label for="email">Select Site Type:</label>
                                        <Select
                                            value={this.state.selectedType}
                                            onChange={this.updateSelectedTypeList(
                                                'selectedType'
                                            )}
                                            options={this.state.siteTypeOptions}
                                            className="multi-select"
                                            classNamePrefix="multi-select"
                                            isSearchable={true}
                                            placeholder="Select Active Site"
                                        />
                                    </div>

                                </div>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={(e) => this.onOkayClick(e)}>CLOSE</button>
                            <button type="button" className="btn btn-primary assing-user-btn" onClick={(e) => this.onSubmitclick(e)}>Submit</button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loginData: state.login.loginData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        assignSiteToUserRequest: data => dispatch(assignSiteToUserRequest(data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SiteModal);
