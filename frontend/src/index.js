import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import "./components/Navbar.css";
import Scroll from './components/Scroll';

const rootNode = document.getElementById('root');
ReactDOM.render(
  <div>
    <React.StrictMode>
      <div className="navbar">
        <Navbar />
      </div>
      <App />
      <Scroll />
    </React.StrictMode>
  </div>,
  rootNode
);