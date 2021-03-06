import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx'
import './styles.css'
import store from './store';

// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept()

render(
    // wrap the App in the Provider and pass in the store
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
);