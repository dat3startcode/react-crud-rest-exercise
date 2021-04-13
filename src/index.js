import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from "./components/App"
import AppRouting from "./components/App_routing"
import apiFacade from "./apiFacade";

ReactDOM.render(<AppRouting apiFacade={apiFacade}/>, document.getElementById('root'));


