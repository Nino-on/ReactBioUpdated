import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import About from './component/main/Main.js';
import Projects from './component/projectpage/projectpage.js';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle';

import './App.css';

function App() {
  return (
    <div className="App">
  
        <Router basename="/">
          
          <Route  exact path="/" component={About}/>
          <Route exact path="/Projects" component={Projects}/>
     
        </Router>
    </div>
  );
}

export default App;