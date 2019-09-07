import React, { Component } from 'react';

// TODO: Improve the component
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error) {
        // Display fallback UI
        this.setState({
            hasError: true,
            error: error.message
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    {this.state.error && (
                        <div className="text-center">
                            <h1>ErrorBoundary</h1>
                        </div>
                    )}
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
