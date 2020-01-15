import React from 'react';
import { Route,Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Settings from "./components/Settings";

function App() {
  return (
    <div>
        <div id="main_outer_cntr">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/settings" exact component={Settings}/>
          </Switch>
        </div>
      </div>
  );
}

export default App;
