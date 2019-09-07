/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import base64 from 'base-64';
import { Link, Redirect } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import { signupRequested } from '../../../state/actions/signupActions'
import { ToastContainer, toast } from 'react-toastify';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            form: {
                firstname: '',
                lastname: '',
                email: '',
                phone_number: '',
                company_name: '',
                state: '',
                city: '',
                zip_code: '',
                address: '',
                password: '',
                confirm_password: '',
                user_role: ''
            },
            selectedUserRole: '',
            userRoleList: [
                { value: 2, label: 'Developer' },
                { value: 3, label: 'Reviewer' }
            ]
        };
    }
    inputChangeHandler = (event) => {
        this.setState(Object.assign({}, this.state, {
            form: Object.assign({}, this.state.form, {
                [event.target.name]: event.target.value
            })
        }))
    }

    onSignupInClick = (e) => {
        e.preventDefault()
        if (this.validator.allValid() && this.state.form.password === this.state.form.confirm_password) {
            let signupPayload = this.state.form
            signupPayload.status = 0
            signupPayload.password = base64.encode(this.state.form.password)
            delete signupPayload.confirm_password
            console.log('signupPayload==>>', signupPayload, this.state.form)
            this.props.signupRequested(this.state.form)
        } else {
            if (this.state.form.password != this.state.form.confirm_password) {
                toast.error('Password does not match please confirm password')
            }
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    updateSelectItemList = field => items => {
        console.log('field, items ==>>', field, items)
        this.setState({
            ...this.state,
            [field]: items,
            loaded: true,
            form: {
                ...this.state.form,
                user_role: items.value
            }
        });
    };

    render() {
        console.log('State==>>', this.state)
        return (

            !this.props.signupData.isSignupSuccessful ?
                < div >
                    <form className='signup-form'>
                        <div className="registration-title">
                            <h5>Create New Account</h5>
                        </div>
                        <hr />
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
                                    {this.validator.message('email', this.state.form.email, 'required|email')}
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
                                <Select
                                    value={this.state.selectedUserRole}
                                    onChange={this.updateSelectItemList(
                                        'selectedUserRole'
                                    )}
                                    options={this.state.userRoleList}
                                    className="multi-select"
                                    classNamePrefix="multi-select"
                                    isSearchable={false}
                                    placeholder="Select User Role"
                                />
                                <span style={{ color: '#d54b50' }}>
                                    {' '}
                                    {this.validator.message(
                                        'User Role',
                                        this.state.form.address,
                                        ['required']
                                    )}
                                </span>
                            </div>

                        </div>
                        <div className="row justify-content-center">
                            <div className="col-sm-4">
                                <input type="password"
                                    className="form-control" name='password' placeholder="Password"
                                    value={this.state.form.password}
                                    onChange={(e) => this.inputChangeHandler(e)}
                                />
                                <span style={{ color: '#d54b50' }}>
                                    {' '}
                                    {this.validator.message(
                                        'Password',
                                        this.state.form.password,
                                        ['required']
                                    )}
                                </span>
                            </div>
                            <div className="col-sm-4">
                                <input type="password"
                                    className="form-control" name='confirm_password' placeholder="Confirm Password"
                                    value={this.state.form.confirm_password}
                                    onChange={(e) => this.inputChangeHandler(e)}
                                />
                                <span style={{ color: '#d54b50' }}>
                                    {' '}
                                    {this.validator.message(
                                        'Confirm password',
                                        this.state.form.confirm_password,
                                        ['required']
                                    )}
                                </span>
                            </div>
                        </div>
                        <div className="row justify-content-center signup-btn">
                            <div className="col-sm-4">
                                <button type="submit" class="btn btn-block btn-primary"
                                    onClick={(e) => this.onSignupInClick(e)}
                                >Sign Up</button>
                            </div>
                            <div className="col-sm-4">
                                <p>By signing up you agree to our terms of use & privacy policy.</p>
                            </div>
                        </div>
                        <div className="already-signin-btn">
                            <p>Already have an account? <Link to={'/signin'}>Log In</Link></p>
                        </div>

                    </form>
                </div >
                :
                <Redirect to="/" />
        );
    }
}

const mapStateToProps = state => {
    return {
        signupData: state.signup.signupData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signupRequested: data => dispatch(signupRequested(data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
