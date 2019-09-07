import ApiUtils from './apiUtilsNew';
const rootUrl = window._env_.REACT_APP_API_ROOT;

const updateProfileApiRequest = async data => {
    try {
        const response = await ApiUtils.put(`${rootUrl}/users/${data.id}`, data);
        return { response };
    } catch (error) {
        return { error: { ...error.data } };
    }
};

export default {
    updateProfileApiRequest
};
