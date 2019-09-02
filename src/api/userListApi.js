import ApiUtils from './apiUtilsNew';
const rootUrl = window._env_.REACT_APP_API_ROOT;

const fetchUserListRequest = async data => {
    try {
        console.log('Data==>>', data)
        const response = await ApiUtils.get(`${rootUrl}/users`, data);
        console.log('response==>>', response)
        if(response.data.status_code === 200){
            return { response };
        }else{
            return{error: {message: 'Somethig Went Wrong!'}}
        }

    } catch (error) {
        console.log('error==>>', error)
        return { error: { ...error.data } };
    }
};

export default {
    fetchUserListRequest
};
