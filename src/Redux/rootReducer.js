import {firestoreReducer} from 'redux-firestore';
import { combineReducers } from 'redux';
import noteReducer from './noteReducer.js';


const rootReducer = combineReducers({
    notesState: noteReducer,
    firestore: firestoreReducer
}) 
    
    

export default rootReducer;