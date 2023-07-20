import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Signup from './page/SignUp';
import Home from './page/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element ={<App/>}>
     <Route index element={<Home />} />
      
        <Route path="signup" element={<Signup />} />
    </Route>
  )
)
root.render(
 <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
