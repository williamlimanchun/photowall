import React from 'react';
import ReactDom from 'react-dom/client';
import './styles/stylesheet.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';
import App from './Components/App';
import thunk from 'redux-thunk';
import { database } from './database/config';

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDom.createRoot(
    document.getElementById('root')
);

root.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>)