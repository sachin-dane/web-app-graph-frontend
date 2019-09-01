/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import SimpleReactValidator from 'simple-react-validator';
import moment from 'moment';
import Header from '../../ui/Header'
import Sidebar from '../../ui/Sidebar'
import Footer from '../../ui/Footer'
import ProfileComponent from '../HomePage/ProfileComponent'
import { updateProfileRequest } from '../../../state/actions/updateprofileActions'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            form: {
                firstname: 'asf',
                lastname: 'sdfsa',
                email: 'asfas',
                phone_number: 'asdfsa',
                company_name: 'asdfs',
                state: 'asdfa',
                city: 'asdfasf',
                zip_code: 'asdfa',
                address: 'sdf',
            }
        };
    }

    inputChangeHandler = (event) => {
        event.preventDefault()
        this.setState(Object.assign({}, this.state, {
            form: Object.assign({}, this.state.form, {
                [event.target.name]: event.target.value
            })
        }))
    }

    onUpdateClick = (e) => {
        e.preventDefault()
        if (this.validator.allValid()) {
            alert('All Field filled')
            this.props.updateProfileRequest(this.state.form)
        } else {
            alert('Required')
            this.validator.showMessages();
            // rerender to show messages for the first time
            this.forceUpdate();
        }
    }

    render() {
        return (
            <div>

                <main>
                    <Sidebar />
                    <div className="profile-form">
                        <form className='signup-form'>
                            <div className="row justify-content-center">
                                <div className="col-sm-4">
                                    <input type="text" className="form-control"
                                        name='firstname'
                                        placeholder="First name"
                                        value={this.state.form.firstname}
                                        onChange={(e) => this.inputChangeHandler(e)}
                                    />
                                    <span style={{ color: '#d54b50' }}>
                                        {' '}
                                        {this.validator.message(
                                            'First name',
                                            this.state.form.firstname,
                                            ['required']
                                        )}
                                    </span>

                                </div>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control"
                                        name='lastname'
                                        placeholder="Last name"
                                        value={this.state.form.lastname}
                                        onChange={(e) => this.inputChangeHandler(e)}
                                    />
                                    <span style={{ color: '#d54b50' }}>
                                        {' '}
                                        {this.validator.message(
                                            'Last name',
                                            this.state.form.lastname,
                                            ['required']
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-sm-4">
                                    <input type="text"
                                        className="form-control"
                                        name='email'
                                        placeholder="Email Id"
                                        value={this.state.form.email}
                                        onChange={(e) => this.inputChangeHandler(e)}
                                    />
                                    <span style={{ color: '#d54b50' }}>
                                        {' '}
                                        {this.validator.message(
                                            'Email Address',
                                            this.state.form.email,
                                            ['required']
                                        )}
                                    </span>
                                </div>
                                <div className="col-sm-4">
                                    <input type="text"
                                        className="form-control" name='phone_number' placeholder="Mobile Number"

                                        value={this.state.form.phone_number}
                                        onChange={(e) => this.inputChangeHandler(e)}
                                    />
                                    <span style={{ color: '#d54b50' }}>
                                        {' '}
                                        {this.validator.message(
                                            'Mobile Number',
                                            this.state.form.phone_number,
                                            ['required']
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-sm-4">
                                    <input type="text"
                                        className="form-control" name='company_name' placeholder="Company Name"
                                        value={this.state.form.company_name}
                                        onChange={(e) => this.inputChangeHandler(e)}
                                    />
                                    <span style={{ color: '#d54b50' }}>
                                        {' '}
                                        {this.validator.message(
                                            'Company Name',
                                            this.state.form.company_name,
                                            ['required']
                                        )}
                                    </span>
                                </div>
                                <div className="col-sm-4">
                                    <input type="text"
                                        className="form-control"
                                        name='state'
                                        placeholder="State"
                                        value={this.state.form.state}
                                        onChange={(e) => this.inputChangeHandler(e)}
                                    />
                                    <span style={{ color: '#d54b50' }}>
                                        {' '}
                                        {this.validator.message(
                                            'State Name',
                                            this.state.form.state,
                                            ['required']
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-sm-4">
                                    <input type="text"
                                        className="form-control"
                                        name='city'
                                        placeholder="City"
                                        value={this.state.form.city}
                                        onChange={(e) => this.inputChangeHandler(e)}
                                    />
                                    <span style={{ color: '#d54b50' }}>
                                        {' '}
                                        {this.validator.message(
                                            'City Name',
                                            this.state.form.city,
                                            ['required']
                                        )}
                                    </span>
                                </div>
                                <div className="col-sm-4">
                                    <input type="text"
                                        className="form-control" name='zip_code'
                                        placeholder="Zip Code"
                                        value={this.state.form.zip_code}
                                        onChange={(e) => this.inputChangeHandler(e)}
                                    />
                                    <span style={{ color: '#d54b50' }}>
                                        {' '}
                                        {this.validator.message(
                                            'Zip Code',
                                            this.state.form.zip_code,
                                            ['required']
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-sm-4">
                                    <input type="text"
                                        className="form-control" name='address'
                                        placeholder="Address"

                                        value={this.state.form.address}
                                        onChange={(e) => this.inputChangeHandler(e)}
                                    />
                                    <span style={{ color: '#d54b50' }}>
                                        {' '}
                                        {this.validator.message(
                                            'Address',
                                            this.state.form.address,
                                            ['required']
                                        )}
                                    </span>
                                </div>
                                <div className="col-sm-4">
                                    <input data-placeholder="Date of birth" required aria-required="true" class="form-control textbox-n" type="date" name='dob' id="date" name='dob' />
                                </div>

                            </div>
                            <div className="row justify-content-center">
                                <div className="col-sm-4">
                                    <button type="submit" class="btn btn-block btn-primary"
                                        onClick={(e) => this.onUpdateClick(e)}
                                    >Update</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </main>

            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        loginData: state.login.loginData,
        updateProfileData: state.updateProfile.updateProfileData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateProfileRequest: data => dispatch(updateProfileRequest(data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
