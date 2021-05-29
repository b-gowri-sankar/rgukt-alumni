import authReducer from './authReducer';
import centerReducer from './centerReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import postReducer from './postReducer';
import eventReducer from './eventReducer';
import queryReducer from './queryReducer';
import replyReducer from './replyReducer'

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    post: postReducer,
    firebase: firebaseReducer,
    event:eventReducer,
    auth: authReducer,
    query: queryReducer,
    reply: replyReducer,
    center: centerReducer,
    firestore: firestoreReducer,
})

export default rootReducers;