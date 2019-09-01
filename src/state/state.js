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
            data: [],
            userData: {
                userType: 'Admin',
                // userType: 'User'
            },
        }
    },
    signup: {
        signupData: {
            isLoading: false,
            isError: false,
            data: []
        }
    },
    userList: {
        userListData: {
            isLoading: false,
            userList: []
        }
    }
};

export default initialState;
