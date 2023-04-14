import React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Header from "./components/Header"
function App() {
  return (
    <Router>
      
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/search" exact component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
