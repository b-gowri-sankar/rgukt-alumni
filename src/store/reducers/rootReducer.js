import authReducer from './authReducer';
import centerReducer from './centerReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import postReducer from './postReducer';
import eventReducer from './eventReducer';
import queryReducer from './queryReducer';
import replyReducer from './replyReducer'
// import profileReducer from './profileReducer'

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    post: postReducer,
    firebase: firebaseReducer,
    event:eventReducer,
    auth: authReducer,
    query: queryReducer,
    reply: replyReducer,
    // profile: profileReducer,
    center: centerReducer,
    firestore: firestoreReducer,
})

export default rootReducers;