const initState = {
    authError:null
}

const authReducer = (state = initState, action) => {
    console.log("this is action area ",action)
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: 'Login error'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success',action.err)
            return {
                ...state,
                authError: null
            };
        case 'SIGNOUT_SUCCESS':
            console.log("Signout success");
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('SIGNUP SUCCESS');
            return {
                ...state,
                authError: null,
            }
        case 'SIGNUP_ERROR':
            console.log('SIGNUP ERROR', action.err);
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer;