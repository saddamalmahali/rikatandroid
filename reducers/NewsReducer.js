import {
        KATEGORI_IS_GET,  
        KATEGORI_IS_LOADED, 
        KATEGORI_IS_FINISH_LOADED, 
        KATEGORI_IS_SELECTED, 
        LOCATION_LOADING,
        LOCATION_ON_FINISH
    } from '../actions/types';

const INITIAL_STATE = {
    dataKategori: [],
    isLoading: false,
    selected: null,
    location: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case KATEGORI_IS_GET :
            return {
                ...state, 
                isLoading: action.payload,
            }
        case KATEGORI_IS_LOADED :
            return {
                ...state,
                isLoading: action.payload
            }
        case KATEGORI_IS_SELECTED : 
            return {
                ...state,
                selected: action.payload
            }
        case KATEGORI_IS_FINISH_LOADED :
            return {
                ...state,
                dataKategori: action.payload.data,
                isLoading: false
            }
        case LOCATION_LOADING : 
            return {
                ...state,
                isLoading: action.payload
            }
        case LOCATION_ON_FINISH :
            return {
                ...state,
                isLoading: false,
                location: action.payload
            }
        default: 
            return state;
    }
};