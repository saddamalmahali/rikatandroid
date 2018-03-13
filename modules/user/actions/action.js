import {
    ON_LOGOUT } from '../../../actions/types';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {ToastAndroid} from 'react-native';

export const onLogout = (navigation)=>{
    return (dispatch)=>{
        on_logout(dispatch);
        navigation.navigate("Login");
    }
}

const on_logout = (dispatch)=>{
    dispatch({type: ON_LOGOUT});
}