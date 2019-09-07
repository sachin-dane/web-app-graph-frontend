/* eslint-disable no-nested-ternary */
import React from 'react';
var d = new Date();
const currentYear = d.getFullYear();

const Footer = () => {
    return (
        <footer>
            <p>&copy; Copyright {currentYear}, Example Corporation</p>
        </footer>
    );
};

export default Footer;
