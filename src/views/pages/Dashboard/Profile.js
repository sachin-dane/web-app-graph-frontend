/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import moment from 'moment';
import Header from '../../ui/Header'
import Sidebar from '../../ui/Sidebar'
import Footer from '../../ui/Footer'
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>

                <main>
                    <Sidebar />
                    <section>
                        <h1>User Profile Dashboard</h1>
                    </section>
                </main>

            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        loginData: state.login.loginData
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
