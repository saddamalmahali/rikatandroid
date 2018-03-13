import {
        JUDUL_CHANGED, 
        LOCATION_CHANGED, 
        DESCRIPTION_CHANGED, 
        IMAGE_CHANGED, 
        TANGGAL_CHANGED,
        KATEGORI_CHANGED,
        RENDER_ERROR,
        ON_DATA_LOADED,
        RESET_LAPOR_STATE
    } from './types';
import axios from 'axios';
import {ToastAndroid} from 'react-native';
import { Actions } from 'react-native-router-flux';
export const judulChanged = (text) => {
    
    return {
        type: JUDUL_CHANGED,
        payload: text
    };
}

export const locationChanged = (location)=>{
    return {
        type: LOCATION_CHANGED,
        payload: location
    }
}

export const tanggalChanged = (tanggal)=>{
    return {
        type: TANGGAL_CHANGED,
        payload: tanggal
    }
}

export const kategoriChanged = (kategori)=>{
    return {
        type: KATEGORI_CHANGED,
        payload: kategori
    }
}

export const deskripsiChanged = (text)=>{
    return {
        type: DESCRIPTION_CHANGED,
        payload: text
    }
}

export const imageChanged = (image)=>{
    return {
        type:IMAGE_CHANGED,
        payload: image
    }
}

export const renderErrorMessage = (error)=>{
    return{
        type:RENDER_ERROR,
        payload: error
    }
}
export const resetStateLapor = (data)=>{
    return {
        type: RESET_LAPOR_STATE,
        payload: null
    }
}

export const loadData = (headers)=>{
    return (dispatch)=>{
        axios.get('/api/v1/transactions/get_data')
            .then((response)=>{
                if(response.data.data_lapor){
                    onDataLoaded(dispatch, response.data.data_lapor);
                }
                
                // ToastAndroid.show("Data Loaded : "+response.data, ToastAndroid.LONG);
            }).catch(error => {
                onDataLoaded(dispatch, error);
            });
    }
}

const onDataLoaded = (dispatch, data)=>{
    dispatch({type: ON_DATA_LOADED, payload: data});
}
