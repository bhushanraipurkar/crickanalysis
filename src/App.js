import React,{Component} from 'react';
import {Route, Switch } from "react-router-dom";
import Testing_page from './Components/Testing_page';
import Actual_page from './Components/Actual_page';


const App = () => {
  return (
    <Switch>

       <Route exact path="/">
        <Actual_page/>
      </Route> 
      <Route exact path="/test">
        <Testing_page/>
      </Route>
    </Switch>
  )
}

export default App
