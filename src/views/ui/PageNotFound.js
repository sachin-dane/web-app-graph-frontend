import React, { Component } from 'react';

class PageNotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="d-flex flex-row align-items-center error-page justify-content-center">
                <div className="text-center">
                    <h2>404 - Page Not Found</h2>
                    <p className="mb-0">Return to the</p>
                    <a href="/">Homepage</a>
                </div>
            </div>
        );
    }
}

export default PageNotFound;
