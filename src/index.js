import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery/Gallery';
import Admin from './pages/Admin/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  </BrowserRouter>
  // {/* </React.StrictMode> */}
);

