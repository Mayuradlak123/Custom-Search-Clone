import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Header from "./components/Header";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";

function App() {
  return (

     <Router>
 
       <Routes>
         {/* <Route  exact path="/signup" Component={SignUp}/>
         <Route  exact path="/signin" Component={SignIn}/> */}
         <Route  exact path="/" Component={Home}/>
         <Route   exact path="/search" Component={Search}/>
       </Routes>
     </Router>
  )
}

export default App;
