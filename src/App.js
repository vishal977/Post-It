import React, { Component } from 'react';
import './App.css';
import './index.css'
import Navbar from './Components/Navbar.js'
import Home from './Components/Home.js'
import Contact from './Components/Contact.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './Components/Footer'


class App extends Component {
  
  render() {
    return (
      <Router>
      <div className="root">
        <Navbar/>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/contact" component = {Contact}/>
          <Footer/>
      </div>
      </Router>
    )
  }
}

export default App;
