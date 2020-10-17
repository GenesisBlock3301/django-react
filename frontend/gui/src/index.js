import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'


import reducer from './store/reducer/auth'

const  composeEnhance = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose
const store = createStore(reducer,composeEnhance(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <App />
    </Provider>

)

ReactDOM.render(
    app , document.getElementById('root')
);
serviceWorker.unregister();