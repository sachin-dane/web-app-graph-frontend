/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import base64 from 'base-64';
import { Link, Redirect } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import { loginRequested } from '../../../state/actions/loginActions'
import {
    resetCheckUserState,
    checkUserExist,
    forgotPasswordRequest,
    resetForgotPassword
} from '../../../state/actions/userListActions'


class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            form: {
                email: '',
                phone_no: ''
            },
            forgotPwdForm: {
                password: '',
                confirm_password: ''

            }

        };
    }

    componentWillUnmount() {
        this.props.resetCheckUserState()
        this.props.resetForgotPassword()
    }

    inputChangeHandler = (event, type) => {
        this.setState(Object.assign({}, this.state, {
            [type]: Object.assign({}, this.state[type], {
                [event.target.name]: event.target.value
            })
        }))
    }

    onEmailSubmitClick = (e) => {
        e.preventDefault()
        if (this.validator.allValid()) {
            this.props.checkUserExist(this.state.form)
        } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            this.forceUpdate();
        }
    }
    onUpdateSubmitClick = (e) => {
        e.preventDefault()
        if (this.validator.allValid() && this.state.forgotPwdForm.password === this.state.forgotPwdForm.confirm_password) {
            let signinPayload = this.state.forgotPwdForm
            signinPayload.email = this.state.form.email
            signinPayload.password = base64.encode(this.state.forgotPwdForm.password)
            this.props.forgotPasswordRequest(signinPayload)
        } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            this.forceUpdate();
        }
    }


    render() {
        console.log('Forgot State==>>', this.state)
        return (
            !this.props.userListData.forgotPassword.isPasswordUpdated ?
                !this.props.userListData.checkUser.isUserExist ?
                    <form className='sign-form container' >
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <h3>Forgot password</h3>
                            </div>
                        </div>
                        <hr />
                        <div className="row justify-content-center">
                            <div className="col-sm-10">
                                <p>Enter your registered email and Mobile Number for validation</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-sm-7">
                                <input type="text"
                                    className="form-control"
                                    name='email'
                                    placeholder="Email Id"
                                    value={this.state.form.email}
                                    onChange={(e) => this.inputChangeHandler(e, 'form')}
                                    title='Enter email for verification.'
                                />
                                <span style={{ color: '#d54b50' }}>
                                    {' '}
                                    {this.validator.message('email', this.state.form.email, 'required|email')}
                                </span>

                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-sm-7">
                                <input type="text"
                                    className="form-control"
                                    name='phone_no'
                                    placeholder="Mobile Number"
                                    value={this.state.form.phone_no}
                                    onChange={(e) => this.inputChangeHandler(e, 'form')}
                                    title='Enter Mobile number for verification.'
                                />
                                <span style={{ color: '#d54b50' }}>
                                    {' '}
                                    {this.validator.message(
                                        'Mobile No',
                                        this.state.form.phone_no,
                                        ['required']
                                    )}
                                </span>
                            </div>
                        </div>

                        <div className="row justify-content-center">

                            <div className="col-sm-4 col-sm-push-4">
                                <p>New User? <Link to={'/signup'}>Sign Up</Link></p>
                            </div>
                            <div className="col-sm-3 col-sm-pull-4">
                                <button type="submit"
                                    class="btn btn-primary sign-in-btn "
                                    onClick={(e) => this.onEmailSubmitClick(e)}
                                >Submit</button>
                            </div>
                        </div>
                    </form >
                    :
                    <form className='sign-form container' >
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <h3>Forgot password</h3>
                            </div>
                        </div>
                        <hr />
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <p>Now enter your new password</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <input type="text"
                                    className="form-control"
                                    name='password'
                                    placeholder="Password"
                                    value={this.state.forgotPwdForm.password}
                                    onChange={(e) => this.inputChangeHandler(e, 'forgotPwdForm')}
                                />
                                <span style={{ color: '#d54b50' }}>
                                    {' '}
                                    {this.validator.message(
                                        'Password',
                                        this.state.forgotPwdForm.password,
                                        ['required']
                                    )}
                                </span>

                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <input type="password"
                                    className="form-control"
                                    name='confirm_password'
                                    placeholder="Confirm Password"
                                    value={this.state.forgotPwdForm.confirm_password}
                                    onChange={(e) => this.inputChangeHandler(e, 'forgotPwdForm')}
                                />
                                <span style={{ color: '#d54b50' }}>
                                    {' '}
                                    {this.validator.message(
                                        'Confirm Password',
                                        this.state.forgotPwdForm.confirm_password,
                                        ['required']
                                    )}
                                </span>
                            </div>
                        </div>

                        <div className="row justify-content-center">

                            <div className="col-sm-4 col-sm-push-4">
                                <p>New User? <Link to={'/signup'}>Sign Up</Link></p>
                            </div>
                            <div className="col-sm-3 col-sm-pull-4">
                                <button type="submit"
                                    class="btn btn-primary "
                                    onClick={(e) => this.onUpdateSubmitClick(e)}
                                >Submit</button>
                            </div>
                        </div>
                    </form >
                :
                <Redirect to="/" />

        );
    }
}

const mapStateToProps = state => {
    return {
        userListData: state.userList.userListData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        resetForgotPassword: () => dispatch(resetForgotPassword()),
        resetCheckUserState: () => dispatch(resetCheckUserState()),
        forgotPasswordRequest: data => dispatch(forgotPasswordRequest(data)),
        checkUserExist: data => dispatch(checkUserExist(data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForgotPassword);
