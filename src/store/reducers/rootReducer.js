import authReducer from './authReducer';
import centerReducer from './centerReducer';

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    auth: authReducer,
    center:centerReducer
})

export default rootReducers;