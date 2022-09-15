import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* Create a React root for the supplied container and return the root. The root can 
be used to render a React element into the DOM with render :  */

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/*

StrictMode is a tool for highlighting potential problems in an application. Like Fragment ,
 StrictMode does not render any visible UI. It activates additional checks and warnings for 
 its descendants. Note: Strict mode checks are run in development mode only; they do not impact 
 the production build.

*/



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
--------- What is reportWEbVitals()

The goal of Web Vitals is to provide clear guidance on what metrics matter and how to measure them. 
The idea behind Web Vitals is that we can measure them on real users interacting with the page. 
The results can vary based on the network conditions or the device's capabilities

*/