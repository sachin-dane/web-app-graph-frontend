
import ApiUtils from './apiUtilsNew';
const rootUrl = window._env_.REACT_APP_API_ROOT;

const loginApiRequest = async data => {
    console.log('rootUrl==>>', rootUrl)
    try {
        console.log('Data==>>', data)
        const response = await ApiUtils.post(`${rootUrl}/login`, data);
        console.log('response login api ==>>', response)
        if (response.data.status_code === 200) {
            return { response };
        } else {
            console.log()
            return { response };
        }

    } catch (error) {
        return { error: { ...error.data } };
    }
};

const getUserDetails = async data => {
    console.log('rootUrl==>>', rootUrl)
    try {
        console.log('Data==>>', data)
        const response = await ApiUtils.get(`${rootUrl}/users/${data}`);
        console.log('response login api ==>>', response)
        if (response.data.status_code === 200) {
            return { response };
        } else {
            console.log()
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
