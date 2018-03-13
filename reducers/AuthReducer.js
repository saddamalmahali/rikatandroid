import {USERNAME_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAILED, IS_LOGIN_PROCESS, ON_LOGOUT} from '../actions/types';

const INITIAL_STATE = {
    username: '',
    password: '',
    error: '',
    user: null,
    isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USERNAME_CHANGED : 
            
            return {
                ...state, 
                username: action.payload
            };
        case PASSWORD_CHANGED : 
            return {
                ...state, 
                password: action.payload
            };
        case IS_LOGIN_PROCESS :
            return {
                ...state, 
                isLoading: action.payload,
                error: ''
            }
        case LOGIN_SUCCESS : 
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                username: '',
                password: ''
            }
        case LOGIN_FAILED :
            return {
                ...state, 
                user: null, 
                isLoading: false,
                error: action.payload
            }
        case ON_LOGOUT :
            return {
                ...state,
                user: null
            }
        default: 
            return state;
    }
};