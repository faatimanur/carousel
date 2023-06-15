import React from 'react';
import ReactDOM from 'react-dom/client';
import StatusBar from './components/statusbar/StatusBar';
import './index.scss';
import TimerComp from './components/timerComp/TimerComp';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Products from './components/products/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <StatusBar />
    </div>
      <TimerComp />
    <div className="container">
      <Navbar />
      <Menu />
      <Products />
    </div>
  </React.StrictMode>
);
