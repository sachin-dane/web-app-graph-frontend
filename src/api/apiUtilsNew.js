import axios from 'axios';

const ErrorResponse = {
    data: {
        message: 'Something went wrong, please try again'
    }
};
class ApiUtils {
    request = null;

    baseUrl = null;

    defaultTimeout = 0;

    constructor(baseUrl, defaultTimeout) {
        this.baseUrl = baseUrl;
        this.defaultTimeout = defaultTimeout;
        this.request = axios.create({
            baseURL: this.baseUrl,
            // headers: {
            //     Authorization: `Bearer ${token}`,
            //     'Content-Type': 'application/json'
            // }
        });
    }

    /**
     * Will be used to set the users JWT and create an isntance of axios.
     * @param {String} - The users access token
     * @param {Number} requestTimeout -  Request will wait 30 seconds before timing out
     */
    // setUserInformation = token => {
    //     // Create a configured axios instance
    //     this.request = axios.create({
    //         baseURL: this.baseUrl,
    //         // headers: {
    //         //     Authorization: `Bearer ${token}`,
    //         //     'Content-Type': 'application/json'
    //         // }
    //     });
    //     this.request.defaults.timeout = this.defaultTimeout;
    //     this.request.interceptors.response.use(
    //         response => {
    //             return response;
    //         },
    //         error => {
    //             if ('code' in error && error.code === 'ECONNABORTED') {
    //                 ErrorResponse.data.message =
    //                     'Request timeout, Please try again';
    //                 throw ErrorResponse;
    //             } else if (error.message === 'Network Error') {
    //                 ErrorResponse.data.message = error.message;
    //                 throw ErrorResponse;
    //                 // } else if (error.response.status === 401) {
    //                 //     handleLogout();
    //             } else {
    //                 throw error;
    //             }
    //         }
    //     );
    // };

    /**
     * The function converts a Object to a query string
     * Only 1st level keys are converted now
     * @param {Object} obj - The object to map
     * @returns {String} - The converted object
     */
    mapObjectToQueryString = obj => {
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

    /**
     * The method will make a GET request to the provided URL
     * @param {String} url - The URL to make the request to
     * @param {Number} requestTimeout -  Request will wait 5 min before timing out
     */
    get = async (url, requestTimeout = this.defaultTimeout) => {
        try {
            const response = await this.request.get(url, {
                timeout: requestTimeout
            });
            return response;
        } catch (ex) {
            if (ex.response && ex.response.data && ex.response.data.message) {
                throw ex.response;
            } else {
                // if error response not defined
                throw ErrorResponse;
            }
        }
    };

    /**
     * The method will make a PUT request to the provided URL
     * @param {String} url - The URL to make the request to
     * @param {Object} body - The data to send in the request
     * @param {Number} requestTimeout -  Request will wait 5 min before timing out
     */
    put = async (url, body, requestTimeout = this.defaultTimeout) => {
        try {
            const response = await this.request.put(url, body, {
                timeout: requestTimeout
            });
            return response;
        } catch (ex) {
            if (ex.response && ex.response.data && ex.response.data.message) {
                throw ex.response;
            } else {
                // if error response not defined
                throw ErrorResponse;
            }
        }
    };

    /**
     * The method will make a POST request to the provided URL
     * @param {String} url - The URL to make the request to
     * @param {Object} body - The data to send in the request
     * @param {Number} requestTimeout -  Request will wait 5 min before timing out
     */
    post = async (url, body, requestTimeout = this.defaultTimeout) => {
        console.log('====>>>', url, body)
        let response = null;
        try {
            response = await this.request.post(url, body, {
                timeout: requestTimeout
            });
            console.log('API response ==>>', response)
            return response;
        } catch (ex) {
            console.log('API ex ==>>', ex.response)
            if (ex.response && ex.response.data) {
                return ex.response;
            } else {
                // if error response not defined
                // ErrorResponse.data.statusCode = ex.response.status
                throw ErrorResponse;
            }
        }
    };

    /**
     * The method will make a DELETE request to the provided URL
     * @param {String} url - The URL to make the request to
     * @param {Number} requestTimeout -  Request will wait 5 min before timing out
     */
    del = async (url, requestTimeout = this.defaultTimeout) => {
        try {
            const response = await this.request.delete(url, {
                timeout: requestTimeout
            });
            return response;
        } catch (ex) {
            if (ex.response && ex.response.data && ex.response.data.message) {
                throw ex.response;
            } else {
                // if error response not defined
                throw ErrorResponse;
            }
        }
    };
}

/* eslint no-underscore-dangle: ["error", { "allow": ["_", "_env_"] }] */
export default new ApiUtils(
    window._env_.REACT_APP_API_ROOT,
    window._env_.REACT_APP_API_TIMEOUT
);
