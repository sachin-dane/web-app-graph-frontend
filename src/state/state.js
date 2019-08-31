const initialState = {
    dashboard: {
        trends: {
            current: {
                isLoading: false
            },
            previous: {
                isLoading: false
            }
        }
    },
    login: {
        loginData: {
            isLoading: false,
            isError: false,
            data: []
        }
    },
    signup: {
        signupData: {
            isLoading: false,
            isError: false,
            data: []
        }
    }
};

export default initialState;
