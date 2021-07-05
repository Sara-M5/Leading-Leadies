import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.css';
import Navbar from './Component/Navbar/Navbar';

import Home from './Home';
import About from './Pages/About/About';
import ShopFullWidth from './Pages/Themes/ShopFullWidth/ShopFullWidth';
import ShopRightSidebar from './Pages/Themes/ShopRightSidebar';
import Contact from './Pages/Contact/Contact';
import PricingPlan from './Pages/Pages/Pricing Plan/PricingPlan';
import Service from './Pages/Pages/Services/Service';
import Team from './Pages/Pages/Team/Team';
import Blog from './Pages/Pages/Blog/Blog';
import Login from './Pages/Pages/Login/Login';


class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
      
            <Route path="/About" exact>
              <About />
            </Route>
      
            <Route path="/ShopFullWidth" exact>
            <ShopFullWidth />
            </Route>
      
            <Route path="/ShopRightSidebar" exact>
            <ShopRightSidebar/>
            </Route>

             <Route path="/Service" exact>
              <Service />
            </Route>

            <Route path="/PricingPlan" exact>
              <PricingPlan />
            </Route>

            <Route path="/Team" exact>
              <Team />
            </Route>
      
            <Route path="/Contact" exact>
              <Contact />
            </Route>
      
            <Route path="/Blog" exact>
              <Blog />
            </Route>
      
            <Route path="/Login" exact>
              <Login />
            </Route>

            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    );
  }
}
export default App;
