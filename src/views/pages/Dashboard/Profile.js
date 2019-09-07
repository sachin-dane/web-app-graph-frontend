/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import Sidebar from '../../ui/Sidebar'
import { updateProfileRequest } from '../../../state/actions/updateprofileActions'
import { getUserRequst } from '../../../state/actions/loginActions'


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.props.getUserRequst(Object.keys(this.props.loginData.userData).length && this.props.loginData.userData.id ? this.props.loginData.userData.id : '')
        this.state = {
            form: {
                firstname: Object.keys(this.props.loginData.userData).length && this.props.loginData.userData.firstname ? this.props.loginData.userData.firstname : '',
                lastname: Object.keys(this.props.loginData.userData).length && this.props.loginData.userData.lastname ? this.props.loginData.userData.lastname : '',
                email: Object.keys(this.props.loginData.userData).length && this.props.loginData.userData.email ? this.props.loginData.userData.email : '',
                phone_number: Object.keys(this.props.loginData.userData).length && this.props.loginData.userData.phone_no ? this.props.loginData.userData.phone_no : '',
                company_name: Object.keys(this.props.loginData.userData).length && this.props.loginData.userData.company_name ? this.props.loginData.userData.company_name : '',
                state: Object.keys(this.props.loginData.userData).length && this.props.loginData.userData.state ? this.props.loginData.userData.state : '',
                city: Object.keys(this.props.loginData.userData).length && this.props.loginData.userData.city ? this.props.loginData.userData.city : '',
                zip_code: Object.keys(this.props.loginData.userData).length && this.props.loginData.userData.zip_code ? this.props.loginData.userData.zip_code : '',
                address: Object.keys(this.props.loginData.userData).length && this.props.loginData.userData.address ? this.props.loginData.userData.address : '',
                id: Object.keys(this.props.loginData.userData).length && this.props.loginData.userData.id ? this.props.loginData.userData.id : ''
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
            this.props.updateProfileRequest(this.state.form)
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render() {
        return (
            <div>

                <main>
                    <Sidebar />

                    <form className='profile-form'>
                        <div className="registration-title">
                            <h5>Update Your Profile Information</h5>
                        </div>
                        <hr />
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <label for="exampleInputEmail1">First name</label>
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
                            <div className="col-sm-6">
                                <label for="exampleInputEmail1">Last name</label>
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
                            <div className="col-sm-6">
                                <label for="exampleInputEmail1">Email Id</label>
                                <input type="text"
                                    className="form-control"
                                    name='email'
                                    placeholder="Email Id"
                                    value={this.state.form.email}
                                    onChange={(e) => this.inputChangeHandler(e)}
                                    disabled={this.state.form.email ? true : false}
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
                            <div className="col-sm-6">
                                <label for="exampleInputEmail1">Mobile Number</label>
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
                            <div className="col-sm-6">
                                <label for="exampleInputEmail1">Company name</label>
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
                            <div className="col-sm-6">
                                <label for="exampleInputEmail1">State</label>
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
                            <div className="col-sm-6">
                                <label for="exampleInputEmail1">City</label>
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
                            <div className="col-sm-6">
                                <label for="exampleInputEmail1">Zip Code</label>
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
                            <div className="col-sm-12">
                                <label for="exampleInputEmail1">Address</label>
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

                        </div>
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <button type="submit" class="btn btn-block btn-primary"
                                    onClick={(e) => this.onUpdateClick(e)}
                                >Update</button>
                            </div>
                        </div>

                    </form>
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
        getUserRequst: data => dispatch(getUserRequst(data)),

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
