import {firestoreReducer} from 'redux-firestore';
import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import noteReducer from './noteReducer.js';
import authenticationReducer from './authenticationReducer'


const rootReducer = combineReducers({
    notesState: noteReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    authentication: authenticationReducer
}) 
    
    

export default rootReducer;