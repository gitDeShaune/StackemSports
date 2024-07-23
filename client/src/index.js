import React, {lazy,Suspense} from 'react';
//lazy/suspense is to help split code execution by not loading everything all at once
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

//import './gstyles.css'

import {BrowserRouter} from 'react-router-dom'





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	
	<BrowserRouter>
	<Suspense >
		<App />
	</Suspense>
	</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//fallback = {<h1> Loading...</h1>}>
