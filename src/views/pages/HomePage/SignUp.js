/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import { signupRequested } from '../../../state/actions/signupActions'

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
                confirm_password: ''
            }
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
        if (this.validator.allValid()) {
            this.props.signupRequested(this.state.form)
        } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            this.forceUpdate();
        }
    }
    render() {
        return (
            <div>
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
                            <input type="text"
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
                            <input type="text"
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
                    <div className="row justify-content-center">
                        <div className="col-sm-4">
                            <button type="submit" class="btn btn-block btn-primary"
                                onClick={(e) => this.onSignupInClick(e)}
                            >Sign Up</button>
                        </div>
                        <div className="col-sm-4">
                            <p>By signing up you agree to our terms of use & privacy policy.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <p>Already have an account? <Link to={'/signin'}>Log In</Link></p>
                    </div>

                </form>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {};
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
