import {ON_LOADING} from './types';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export const onLoad = (load) => {
    
    return {
        type: ON_LOADING,
        payload: load
    };
}
