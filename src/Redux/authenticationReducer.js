
const initState = {
    authError: null
}

const authenticationReducer = (state = initState, action ) => {
    switch(action.type) 
    {
        case 'LOGIN_FAILED':
        return {
            ...state,
            authError: 'failed'
        }
        case 'LOGGED_IN':
        return {
           ...state,
           authError: null
        }

        case 'SIGNED_OUT':
            return state;

        case 'SIGNED_UP':
        return {
            ...state,
            authError: null
        }

        case 'SIGNUP_FAILED':
        return {
            ...state,
            authError: action.err.message
        }
        default:
        return state;
       
    }
    
}

export default authenticationReducer;