import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';

const WithNavbar = ({ component: Component, ...more }) => {
    return (
        <Route
            {...more}
            render={props => {
                return (
                    <>
                        <Navbar {...props} {...more} />
                        <Component {...props} {...more} />
                    </>
                );
            }}
        />
    );
};

export default WithNavbar;
