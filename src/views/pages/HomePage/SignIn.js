/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <form className='sign-form'>
                    <div className="row justify-content-center">
                        <div className="col-sm-6">
                            <input type="text" className="form-control" name='firstname' placeholder="First name" />
                            {/* <small id="passwordHelpBlock" class="form-text text-muted">
                                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </small> */}
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-6">
                            <input type="text" className="form-control" name='email' placeholder="Email Id" />
                        </div>
                    </div>

                    <div className="row justify-content-center">

                        <div className="col-sm-3">
                            <p>New User? <Link to={'/signup'}>Sign Up</Link></p>
                        </div>
                        <div className="col-sm-3">
                            <button type="submit" class="btn btn-block btn-primary">Sign in</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <p>Forgot Password </p>
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
)(SignIn);
