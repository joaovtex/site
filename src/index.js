import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Contador from './pages/Contador';
import Calculadora from './pages/Calculadora';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculadora />
  </React.StrictMode>
);



