/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import moment from 'moment';

class DashboardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Dashboard Container</h1>
            </div>
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
)(DashboardContainer);
