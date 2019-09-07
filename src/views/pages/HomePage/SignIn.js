/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import base64 from 'base-64';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import { loginRequested } from '../../../state/actions/loginActions'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            form: {
                email: '',
                password: ''
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

    onSignInClick = (e) => {
        e.preventDefault()
        if (this.validator.allValid()) {
            let signinPayload = this.state.form
            signinPayload.password = base64.encode(this.state.form.password)
            this.props.loginRequested(this.state.form)
        } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            this.forceUpdate();
        }
    }

    render() {
        return (
            <div>
                <form className='sign-form container'>
                    <div className="row justify-content-center">
                        <div className="col-sm-8 sign-in-title">
                            <h3>Sign In To Your Account </h3>
                        </div>
                    </div>
                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-sm-7">
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
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-7">
                            <input type="password"
                                className="form-control"
                                name='password'
                                placeholder="Password"
                                value={this.state.form.password}
                                onChange={(e) => this.inputChangeHandler(e)}
                            />
                            <span style={{ color: '#d54b50' }}>
                                {' '}
                                {this.validator.message(
                                    'password',
                                    this.state.form.password,
                                    ['required']
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="row justify-content-center">

                        <div className="col-sm-4">
                            <p>New User? <Link to={'/signup'}>Sign Up</Link></p>
                        </div>
                        <div className="col-sm-3">
                            <button type="submit"
                                class="btn btn-primary sign-in-btn"
                                onClick={(e) => this.onSignInClick(e)}
                            >Sign in</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-7">
                            <p><Link to={'/forgot-password'}>Forgot Password?</Link></p>
                        </div>
                    </div>
                </form>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginRequested: data => dispatch(loginRequested(data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);
