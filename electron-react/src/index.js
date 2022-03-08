import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Teste from './Teste.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);