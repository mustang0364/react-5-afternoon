import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';
import  {Provider } from 'react-redux';
import store from './store'
import './index.css';

ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
        <HashRouter>
            <App>  </App>

        </HashRouter> 
    </Provider>
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();

