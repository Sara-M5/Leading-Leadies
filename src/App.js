
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch 
 } 
from 'react-router-dom';

import './App.css';
import Navbar from './Component/Navbar/Navbar';


import Home from './Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Themes from './Pages/Themes/Themes';

class App extends Component {

render(){
  
return(
     
          

         
            <Router>
              <main>
              <Navbar />
                <Switch>
              
                 <Route path="/" exact ><Home /></Route>
                 <Route path="/About" exact ><About /></Route>
                 <Route path="/Themes" exact ><Themes /></Route>
                 
                 <Route path="/Contact" exact ><Contact /></Route>

                 <Redirect to="/" />
                </Switch>
                </main>
            </Router>

 

    );

  }

}
export default App;
