import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from "./components/App"
import apiFacade from "./apiFacade";

ReactDOM.render(<App apiFacade={apiFacade}/>, document.getElementById('root'));


