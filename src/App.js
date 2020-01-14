import React from 'react';
import { Route,Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home";

function App() {
  return (
    <div>
        <div id="main_outer_cntr">
          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>
        </div>
      </div>
  );
}

export default App;
