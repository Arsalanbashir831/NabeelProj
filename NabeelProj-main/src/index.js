import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App'
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router >
            <App className="transition-all duration-300 ease-in-out" />
        </Router>
    </React.StrictMode >
);