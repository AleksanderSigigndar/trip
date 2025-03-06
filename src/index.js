import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Luxury from './pages/luxuryPage/luxuryMain/luxuryMain';
import Lk from './pages/lk/lkMain/lkMain'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App  />} />
        <Route path="Luxury" element={<Luxury/>} />
        <Route path="Lk" element={<Lk/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
