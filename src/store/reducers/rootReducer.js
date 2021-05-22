import authReducer from './authReducer';
import centerReducer from './centerReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';


import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth: authReducer,
    center:centerReducer
})

export default rootReducers;