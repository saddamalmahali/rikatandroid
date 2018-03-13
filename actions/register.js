import { 
    NAMA_LENGKAP_CHANGED, 
    EMAIL_CHANGED, 
    USERNAME_CHANGED, 
    PASSWORD_CHANGED, 
    REGISTER_SUCCESS,
    IS_LOGIN_PROCESS,
    CLEAR_CHANGED
} from './types';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export const usernameChanged = (text) => {
    
    return {
        type: USERNAME_CHANGED,
        payload: text
    };
}

export const passwordChanged = (text) => {
    
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
}

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const namaLengkapChanged = (text) => {
    return {
        type: NAMA_LENGKAP_CHANGED,
        payload: text
    }
}

export const clearChanged = (data)=>{
    return {
        type: CLEAR_CHANGED,
        payload: data
    }
}

export const registerSubmit = ()=>{
    return (dispatch)=>{

    }
}

const registerSukses = (dispatch, data)=>{
    dispatch({type: REGISTER_SUCCESS, payload:data});
}