import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import { BrowserRouter as Router } from 'react-router-dom'; 
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';


const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <Router>
    <App />
  </Router>
);