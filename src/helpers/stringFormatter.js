// Utilities for string manipulation

/**
 * Convert a single word to proper case. e.g. test -> Test
 * @param {String} str - String to convert
 * @returns {String} - The converted string
 */
const toProperCase = str => {
    return str.replace(/\w\S*/g, txt => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

export default {
    toProperCase
};
