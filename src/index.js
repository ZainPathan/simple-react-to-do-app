import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoApp from './compoenents/TodoApp';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<TodoApp />, document.getElementById('container'));
registerServiceWorker();
