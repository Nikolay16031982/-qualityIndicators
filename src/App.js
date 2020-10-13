import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Temp from "./temp/Temp"
import NaviBar from "./Components/NaviBar"
//import Switch from 'react-bootstrap/esm/Switch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Users from "./Users";

const Data={
  labels:["1","2","3","4","5","6","8","10"],
  datasets:[
      {
        data:[1, 2, 3, 4, 11, 5]
      }
 ]
}


function App() {
  return (
    
    <div>
      <Router>
      <NaviBar/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/about" component={About}/>
        <Route path="/temp" component={Temp}/>
        </Switch>
      </Router>    
    </div>
  );
}

export default App;
