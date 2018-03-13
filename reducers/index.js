import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NewsReducer from './NewsReducer';
import LaporReducer from './LaporReducer';
import CommonReducer from './CommonReducer';
import RegisterReducer from './RegisterReducer';
import {reducer as FormReducer} from 'redux-form';

export default combineReducers({
    auth: AuthReducer,
    news: NewsReducer,
    lapor: LaporReducer,
    common: CommonReducer,
    register: RegisterReducer,
    form: FormReducer
});