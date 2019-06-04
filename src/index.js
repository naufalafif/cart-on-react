import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Cart from './cart'
import './index.css';

ReactDOM.render(<Cart />, document.getElementById('root'));

serviceWorker.unregister();
