import ApiUtils from './apiUtilsNew';
const rootUrl = window._env_.REACT_APP_API_ROOT;

const signupApiRequest = async data => {
    try {
        console.log('Data==>>', data)
        const response = await ApiUtils.post(`${rootUrl}/signup`, data);
        console.log('response==>>', response)
        return { response };
    } catch (error) {
        console.log('error==>>', error)
        return { error: { ...error.data } };
    }
};

export default {
    signupApiRequest
};
