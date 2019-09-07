import ApiUtils from './apiUtilsNew';
const rootUrl = window._env_.REACT_APP_API_ROOT;

const signupApiRequest = async data => {
    try {
        const response = await ApiUtils.post(`${rootUrl}/users`, data);
        return { response };
    } catch (error) {
        return { error: { ...error.data } };
    }
};

export default {
    signupApiRequest
};
