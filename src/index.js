import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Contador from './pages/Contador';
import Calculadora from './pages/Calculadora';
import Nitro from './pages/Nitro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nitro />
  </React.StrictMode>
);



