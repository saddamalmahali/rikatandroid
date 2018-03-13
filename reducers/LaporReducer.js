import {
    JUDUL_CHANGED, 
    LOCATION_CHANGED, 
    DESCRIPTION_CHANGED, 
    IMAGE_CHANGED,
    TANGGAL_CHANGED,
    KATEGORI_CHANGED,
    RENDER_ERROR,
    LOAD_DATA_LAPOR,
    ON_DATA_LOADED,
    RESET_LAPOR_STATE
} from '../actions/types';

const INITIAL_STATE = {
    judul: '',
    location: null,
    deskripsi: '',
    tanggal: '',
    kategori: '',
    image: null,
    errors: null,
    dataLapor: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case JUDUL_CHANGED :
            return {
                ...state, 
                judul: action.payload,
            };
        case LOCATION_CHANGED :
            return {
                ...state,
                location: action.payload
            };
        case TANGGAL_CHANGED :
            return {
                ...state,
                tanggal: action.payload
            };
        case KATEGORI_CHANGED :
            return {
                ...state,
                kategori: action.payload
            };
        case DESCRIPTION_CHANGED :
            return {
                ...state,
                deskripsi: action.payload
            };
        case IMAGE_CHANGED :
            return {
                ...state,
                image:action.payload
            };
        case RENDER_ERROR :
            return {
                ...state,
                errors: action.payload
            };
        case LOAD_DATA_LAPOR :
            return {
                ...state,
                dataLapor: action.payload
            };
        case ON_DATA_LOADED :
            return {
                ...state,
                dataLapor : action.payload
            };
        case RESET_LAPOR_STATE :
            return {
                ...state,
                judul: '',
                location: null,
                deskripsi: '',
                tanggal: '',
                kategori: '',
                image: null,
                errors: null,
                dataLapor: null
            }
        default: 
            return state;
    }
};