import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import About from '../src/component/Main.js';

import "bootstrap/dist/css/bootstrap.css";

import './App.css';

function App() {
  return (
    <div className="App">
      
          <About/>
      
    </div>
  );
}

export default App;
