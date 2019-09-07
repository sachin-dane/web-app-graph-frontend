
import ApiUtils from './apiUtilsNew';
const rootUrl = window._env_.REACT_APP_API_ROOT;

const loginApiRequest = async data => {
    try {
        const response = await ApiUtils.post(`${rootUrl}/login`, data);
        if (response.data.status_code === 200) {
            return { response };
        } else {
            return { response };
        }

    } catch (error) {
        return { error: { ...error.data } };
    }
};

const getUserDetails = async data => {
    try {
        const response = await ApiUtils.get(`${rootUrl}/users/${data}`);
        if (response.data.status_code === 200) {
            return { response };
        } else {
            return { response };
        }

    } catch (error) {
        return { error: { ...error.data } };
    }
};

export default {
    loginApiRequest,
    getUserDetails
};
