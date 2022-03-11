import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/Home/Home.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);