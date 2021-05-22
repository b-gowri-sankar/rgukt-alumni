import authReducer from './authReducer';
import centerReducer from './centerReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import  postReducer from './postReducer';

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    post: postReducer,
    firebase: firebaseReducer,
    auth: authReducer,
    center: centerReducer,
    firestore: firestoreReducer,
})

export default rootReducers;