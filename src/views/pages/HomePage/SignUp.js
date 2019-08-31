/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <form className='signup-form'>
                    <div className="row justify-content-center">
                        <div className="col-sm-4">
                            <input type="text" className="form-control" name='firstname' placeholder="First name" />
                            {/* <small id="passwordHelpBlock" class="form-text text-muted">
                                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </small> */}
                        </div>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" name='lastname' placeholder="Last name" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-4">
                            <input type="text" className="form-control" name='email' placeholder="Email Id" />
                        </div>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" name='phone_number' placeholder="Mobile Number" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-4">
                            <input type="text" className="form-control" name='company_name' placeholder="Company Name" />

                        </div>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" name='state' placeholder="State" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-4">
                            <input type="text" className="form-control" name='city' placeholder="City" />

                        </div>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" name='zip_code' placeholder="Zip Code" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-4">
                            <input type="text" className="form-control" name='address' placeholder="Address" />

                        </div>
                        <div className="col-sm-4">
                            <input data-placeholder="Date of birth" required aria-required="true" class="form-control textbox-n" type="date" name='dob' id="date" name='dob' />

                        </div>

                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-4">
                            <input type="text" className="form-control" name='password' placeholder="Password" />
                        </div>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" name='confirm_password' placeholder="Confirm Password" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-4">
                            <button type="submit" class="btn btn-block btn-primary">Sign in</button>
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
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
