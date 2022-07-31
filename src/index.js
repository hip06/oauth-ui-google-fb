import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LoginSuccess from './LoginSuccess';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login/:userId' element={<LoginSuccess />} />
    </Routes>
  </BrowserRouter>

);


