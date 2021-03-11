import React from 'react'
import { render } from 'react-dom';
import App from './App.jsx'
import './styles.css'

// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept()

render(
    // wrap the App in the Provider and pass in the store
    <App/>,
    document.getElementById('root')
);