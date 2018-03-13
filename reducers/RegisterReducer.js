import {
        USERNAME_CHANGED, 
        PASSWORD_CHANGED, 
        LOGIN_SUCCESS, 
        LOGIN_FAILED, 
        IS_LOGIN_PROCESS, 
        NAMA_LENGKAP_CHANGED,
        EMAIL_CHANGED,
        CLEAR_CHANGED,
        REGISTER_SUCCESS
    } from '../actions/types';

const INITIAL_STATE = {
    nama_lengkap: '',
    email: '',
    username: '',
    password: '',
    error: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NAMA_LENGKAP_CHANGED : 
            return {
                ...state,
                nama_lengkap: action.payload
            };
        case EMAIL_CHANGED : 
            return {
                ...state,
                email: action.payload
            }
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
        case CLEAR_CHANGED :
            return {
                ...state,
                password: '',
                username: '',
                nama_lengkap: '',
                email: '',
                error: ''
            };
        case REGISTER_SUCCESS : 
            return {
                ...state,
                data
            }
        default: 
            return state;
    }
};