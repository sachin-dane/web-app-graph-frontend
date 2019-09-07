import ApiUtils from './apiUtilsNew';
const rootUrl = window._env_.REACT_APP_API_ROOT;

const fetchSitesListRequest = async data => {
    try {
        console.log('Data==>>', data)
        const response = await ApiUtils.post(`${rootUrl}/sites`, data);
        console.log('response==>>', response)
        return { response };
    } catch (error) {
        console.log('error==>>', error)
        return { error: { ...error.data } };
    }
};


const fetchUserSpecificSites = async data => {
    try {
        console.log('site list apiData==>>', data)
        const response = await ApiUtils.get(`${rootUrl}/sites/users/${data.id}/${data.role_id}`, data);
        console.log('response==>>', response)
        if (response.data.status_code === 200) {
            return { response };
        } else {
            return { error: { message: 'Somethig Went Wrong!' } }
        }
    } catch (error) {
        console.log('error==>>', error)
        return { error: { ...error.data } };
    }
};

const fetchSitesById = async data => {
    try {
        console.log('site list apiData==>>', data)
        const response = await ApiUtils.get(`${rootUrl}/sites/${data}`);
        console.log('response==>>', response)
        if (response.data.status_code === 200) {
            return { response };
        } else {
            return { error: { message: 'Somethig Went Wrong!' } }
        }
    } catch (error) {
        console.log('error==>>', error)
        return { error: { ...error.data } };
    }
};

export default {
    fetchSitesListRequest,
    fetchUserSpecificSites,
    fetchSitesById,
};
