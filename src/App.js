import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line no-unused-vars
import $ from 'jquery';

import 'bootstrap/dist/js/bootstrap';
import './assets/style/app.css';
import './assets/style/appStyles.scss';
import View from './views/View';

class App extends React.Component {
    componentWillUnmount() { }

    render() {
        return (
            <>
                <Switch>
                    <Route path="/" component={View} />
                </Switch>
            </>
        );
    }
}

export default withRouter(App);
