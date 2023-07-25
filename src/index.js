import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Signup from './page/SignUp';
import Home from './page/Home';
import { store } from './redux';
import { Provider } from 'react-redux';
import Login from './page/login';
import Newproduct from './page/newProducts';
import Cart from './page/Cart';
import Success from './page/Success';
import Cancel from './page/Cancel';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element ={<App/>}>
     <Route index element={<Home />} />
     <Route path="newproduct" element={<Newproduct />} />
     <Route path="cart" element={<Cart />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="success" element={<Success/>}/>
      <Route path="cancel" element={<Cancel/>}/>

    </Route>
  )
)
root.render(
  <Provider store={store}>
 <RouterProvider router={router}/>
 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
