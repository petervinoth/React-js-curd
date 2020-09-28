import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {Home} from "./component/Home";
import {Add} from "./component/Add";
import {Edit} from "./component/Edit";
//import Home from "./component/Home";
import {GlobalProvider} from "./context/GlobalState";

import './App.css';

function App() {
  return (
    <div style={{maxWidth:"30rem",margin:"4rem auto"}}>
      <GlobalProvider>
      <Router>
      <Switch>
        
        <Route path="/add" component={Add}/>
        <Route path="/edit/:id" component={Edit}/>
        <Route exact path="/" component={Home}/>
      </Switch>
      </Router>
      </GlobalProvider>
      
    </div>
  );
}

export default App;
