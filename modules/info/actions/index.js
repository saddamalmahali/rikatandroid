import {
    KATEGORI_IS_GET, 
    KATEGORI_IS_LOADED, 
    KATEGORI_IS_FINISH_LOADED, 
    SELECTED_KATEGORI, 
    KATEGORI_IS_SELECTED,
    LOCATION_LOADING,
    LOCATION_LOADED,
    LOCATION_ON_FINISH } from '../../../actions/types';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {ToastAndroid} from 'react-native';

export const onSelectedItem = (selected)=>{
    return (dispatch)=>{
        kategori_is_selected(dispatch, selected);
    }
}

export const onLoadLocation = (loading)=>{
    return (dispatch)=>{
        location_is_loading(dispatch, loading);
    }
}

export const onFinishLoadLocation = ()=>{
    return (dispatch)=>{
        location_is_loading(dispatch, false);
    }
}

export const getLocation = ()=>{
    ToastAndroid.show("Mengambil Data Lokasi", ToastAndroid.SHORT);
    return (dispatch)=>{
        navigator.geolocation.getCurrentPosition(            
            (position) => {
                navigator.geolocation.watchPosition(
                    (position) => {
                        if(position){
                            location_on_finish(dispatch, position);
                        }
                        
                        ToastAndroid.show("Mengambil Data Lokasi Selesai : "+position, ToastAndroid.SHORT);
                    },
                    (error) => ToastAndroid.show("Error Dalam Mengambil Lokasi"+JSON.stringify(error), ToastAndroid.SHORT),
                    { enableHighAccuracy: true, timeout: 10000, maximumAge: 5000, distanceFilter: 10 },
                );

            }
        );  
    } 
}

export const getKategori = (headers)=>{
    
    return (dispatch)=>{
        kategori_is_loading(dispatch, true);
        axios.get('/api/v1/master/kategori/')
            .then((response)=>{
                kategori_is_finish_loaded(dispatch, response.data);
            });        
    }
    
}

const location_on_finish = (dispatch, position)=>{
    dispatch({type: LOCATION_ON_FINISH, payload: position});
}

const kategori_is_selected = (dispatch, data) => {
    dispatch({type: KATEGORI_IS_SELECTED, payload: data});
}

const kategori_is_loading = (dispatch, loading) => {
    dispatch({type:KATEGORI_IS_GET, payload: loading});
}

const kategori_is_loaded = (dispatch, loading) =>{
    dispatch({type:KATEGORI_IS_LOADED, payload: loading});
}

const kategori_is_finish_loaded = (dispatch, dataKategori) => {
    dispatch({type:KATEGORI_IS_FINISH_LOADED, payload: dataKategori});
}

const location_is_loading = (dispatch, loading)=>{
    dispatch({type:LOCATION_LOADING, payload: loading});
}