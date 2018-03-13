import {ON_LOADING} from '../actions/types';

const INITIAL_STATE = {
    isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ON_LOADING :
            return {
                ...state, 
                isLoading: action.payload,
            }
        default: 
            return state;
    }
};