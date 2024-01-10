import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import Footer from "./components/footer";

function App() {
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='sign-up' exact Component={SignUp}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

