import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CounterState from './Context/CounterState';

import { Store } from './Store/Store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> print all element in console
    <Provider store={Store}>
    <CounterState>
    <App />
    </CounterState>
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();