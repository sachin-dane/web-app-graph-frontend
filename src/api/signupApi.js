import ApiUtils from './apiUtilsNew';
const rootUrl = window._env_.REACT_APP_API_ROOT;

const signupApiRequest = async data => {
    try {
        console.log('Data==>>', data)
        const response = await ApiUtils.post(`${rootUrl}/signup`, data);
        return { response };
    } catch (error) {
        return { error: { ...error.data } };
    }
};

export default {
    signupApiRequest
};
