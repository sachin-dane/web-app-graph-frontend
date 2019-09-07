/**
 * Service to make asynchronous API calls
 */

/**
 * The default options to include in every request
 */
const defaultOptions = () => {
    const accessToken = localStorage.getItem('kc-accessToken');
    return {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    };
};

// Map the response and parse the response body to JSON
const mapResponse = async response => {
    const body = await response.json();

    return {
        body,
        status: response.status,
        statusText: response.statusText
    };
};
/**
 * The method will make a GET request to the provided URL
 * @param {String} url - The URL to make the request to
 */
const get = async url => {
    try {
        const response = await fetch(url, {
            ...defaultOptions()
        });

        const data = await response.json();

        return data;
    } catch (ex) {
        return ex;
    }
};

/**
 * The method will make a PUT request to the provided URL
 * @param {String} url - The URL to make the request to
 * @param {Object} body - The data to send in the request
 */
const put = async (url, body) => {
    try {
        const response = await fetch(url, {
            ...defaultOptions(),
            method: 'PUT',
            body: JSON.stringify(body)
        });

        const data = response.status;
        return data;
    } catch (ex) {
        return ex;
    }
};

/**
 * The method will make a POST request to the provided URL
 * @param {String} url - The URL to make the request to
 * @param {Object} body - The data to send in the request
 */
const post = async (url, body) => {
    try {
        const response = await fetch(url, {
            ...defaultOptions(),
            method: 'POST',
            body: JSON.stringify(body)
        });
        return mapResponse(response);
    } catch (ex) {
        return ex;
    }
};

/**
 * The method will make a DELETE request to the provided URL
 * @param {String} url - The URL to make the request to
 */
const del = async url => {
    try {
        const response = await fetch(url, {
            ...defaultOptions(),
            method: 'DELETE'
        });

        const data = await response.json();

        return data;
    } catch (ex) {
        return ex;
    }
};

/**
 * The function converts a Object to a query string
 * Only 1st level keys are converted now
 * @param {Object} obj - The object to map
 * @returns {String} - The converted object
 */
const mapObjectToQueryString = obj => {
    if (obj === undefined) {
        return '';
    }
    const keyValuePairs = [];

    Object.keys(obj).forEach(key => {
        // Add the parsed and encoded values to the arry
        if (obj[key]) {
            keyValuePairs.push(
                `${encodeURIComponent(key)}=${encodeURIComponent(
                    obj[key].toString()
                )}`
            );
        }
    });

    // Seperate every object by &
    return keyValuePairs.join('&');
};

export default {
    get,
    put,
    post,
    del,
    mapObjectToQueryString
};
