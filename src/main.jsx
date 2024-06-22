import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './style/Navbar.css';
import './style/bootstrap.min.css'; // Mengimpor Bootstrap CSS


import ReactGA from "react-ga4";
ReactGA.initialize("G-CCM5PG82PW");
// Send pageview with a custom path
ReactGA.send({ 
  hitType: "pageview", 
  page: window.location.pathname,
 });



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
