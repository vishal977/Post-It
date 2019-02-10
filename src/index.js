import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './Redux/rootReducer';
import thunk from 'redux-thunk';
import {reduxFirestore,getFirestore} from 'redux-firestore'
import { reactReduxFirebase,getFirebase } from 'react-redux-firebase';
import fbConfig from './fbConfig.js';

const store = createStore(rootReducer,
    compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {attachAuthIsReady : true})
)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
