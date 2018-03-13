
import {
    USERNAME_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_SUCCESS, 
    LOGIN_FAILED, 
    IS_LOGIN_PROCESS,
    ON_LOGOUT
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

export const onLogout = (logout)=>{
    return {
        type: ON_LOGOUT,
        payload: logout
    }
}

export const loginAplikasi = (username, password) => {
    return (dispatch) => {
        loginIsProcess(dispatch);
        
        axios.post('/api/login-api', {username: username, password: password})
        .then((response)=>{
            if(response.data){
                loginSukses(dispatch, response.data);
                
            }else{
                loginGagal(dispatch, "Gagal Login");
            }
            
        }).catch(()=>{
            loginGagal(dispatch, "Gagal Login");
        });
    };
}

const loginIsProcess  = (dispatch)=>{
    dispatch({type:IS_LOGIN_PROCESS, payload: true});
}

const loginSukses = (dispatch, data) => {
    dispatch({type:LOGIN_SUCCESS, payload: data});
}

const loginGagal = (dispatch, message) => {
    dispatch({type:LOGIN_FAILED, payload: message});
}