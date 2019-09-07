/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import { loginRequested } from '../../../state/actions/loginActions'

class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {

        };
    }

    render() {
        return (
            <>
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <input type="text" className="form-control"
                            name='firstname'
                            placeholder="First name"
                            value={this.props.profileState.firstname}
                            onChange={(e) => this.props.inputChangeHandler(e)}
                        />
                        <span style={{ color: '#d54b50' }}>
                            {' '}
                            {this.props.validator.message(
                                'First name',
                                this.props.profileState.firstname,
                                ['required']
                            )}
                        </span>

                    </div>
                    <div className="col-sm-4">
                        <input type="text" className="form-control"
                            name='lastname'
                            placeholder="Last name"
                            value={this.props.profileState.lastname}
                            onChange={(e) => this.props.inputChangeHandler(e)}
                        />
                        <span style={{ color: '#d54b50' }}>
                            {' '}
                            {this.props.validator.message(
                                'Last name',
                                this.props.profileState.lastname,
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
                            value={this.props.profileState.email}
                            onChange={(e) => this.props.inputChangeHandler(e)}
                        />
                        <span style={{ color: '#d54b50' }}>
                            {' '}
                            {this.props.validator.message(
                                'Email Address',
                                this.props.profileState.email,
                                ['required']
                            )}
                        </span>
                    </div>
                    <div className="col-sm-4">
                        <input type="text"
                            className="form-control" name='phone_number' placeholder="Mobile Number"

                            value={this.props.profileState.phone_number}
                            onChange={(e) => this.props.inputChangeHandler(e)}
                        />
                        <span style={{ color: '#d54b50' }}>
                            {' '}
                            {this.props.validator.message(
                                'Mobile Number',
                                this.props.profileState.phone_number,
                                ['required']
                            )}
                        </span>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <input type="text"
                            className="form-control" name='company_name' placeholder="Company Name"
                            value={this.props.profileState.company_name}
                            onChange={(e) => this.props.inputChangeHandler(e)}
                        />
                        <span style={{ color: '#d54b50' }}>
                            {' '}
                            {this.props.validator.message(
                                'Company Name',
                                this.props.profileState.company_name,
                                ['required']
                            )}
                        </span>
                    </div>
                    <div className="col-sm-4">
                        <input type="text"
                            className="form-control"
                            name='state'
                            placeholder="State"
                            value={this.props.profileState.state}
                            onChange={(e) => this.props.inputChangeHandler(e)}
                        />
                        <span style={{ color: '#d54b50' }}>
                            {' '}
                            {this.props.validator.message(
                                'State Name',
                                this.props.profileState.state,
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
                            value={this.props.profileState.city}
                            onChange={(e) => this.props.inputChangeHandler(e)}
                        />
                        <span style={{ color: '#d54b50' }}>
                            {' '}
                            {this.props.validator.message(
                                'City Name',
                                this.props.profileState.city,
                                ['required']
                            )}
                        </span>
                    </div>
                    <div className="col-sm-4">
                        <input type="text"
                            className="form-control" name='zip_code'
                            placeholder="Zip Code"
                            value={this.props.profileState.zip_code}
                            onChange={(e) => this.props.inputChangeHandler(e)}
                        />
                        <span style={{ color: '#d54b50' }}>
                            {' '}
                            {this.props.validator.message(
                                'Zip Code',
                                this.props.profileState.zip_code,
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

                            value={this.props.profileState.address}
                            onChange={(e) => this.props.inputChangeHandler(e)}
                        />
                        <span style={{ color: '#d54b50' }}>
                            {' '}
                            {this.props.validator.message(
                                'Address',
                                this.props.profileState.address,
                                ['required']
                            )}
                        </span>
                    </div>
                    <div className="col-sm-4">
                        <input data-placeholder="Date of birth" required aria-required="true" class="form-control textbox-n" type="date" name='dob' id="date" name='dob' />
                    </div>

                </div>
            </>
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
)(ProfileComponent);
