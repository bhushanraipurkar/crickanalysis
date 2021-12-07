import React,{Component} from 'react';
import {Route, Switch } from "react-router-dom";
import Testing_page from './Components/Testing_page';
import Actual_page from './Components/Actual_page';
import One from "./Components/2021_Analysis copy";


const App = () => {
  return (
    <Switch>

       <Route exact path="/">
        <Actual_page/>
      </Route> 
    </Switch>
  )
}

export default App
