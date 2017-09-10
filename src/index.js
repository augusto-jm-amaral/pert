import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'materialize-css/dist/fonts/roboto/Roboto-Medium.woff'
import 'materialize-css/dist/css/materialize.min.css'
import 'jquery/dist/jquery.min.js'
import 'materialize-css/dist/js/materialize.min.js'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
