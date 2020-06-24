import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import
{
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import FoodMenu from './contents/FoodMenu';
import Cart from './contents/Cart';
import Checkout from './contents/Checkout';
import Customer from './contents/Customer';
import Email from './contents/Email';
import OrderDetails from './contents/OrderDetails';
import MenuList from './contents/MenuList';
import Thankyou from './contents/Thankyou';
import ThankyouContact from './contents/ThankyouContact';

function App() {
return (
  <Router>
  <div className="App">
    <Navbar />
    <Route exact path="/">
       <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/education">
      <Education />
    </Route>
    <Route path="/skills">
      <Skills />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
    <Route path="/foodmenu">
      <FoodMenu />
    </Route>
    <Route path="/cart">
      <Cart />
    </Route>
    <Route path="/checkout">
      <Checkout />
    </Route>
    <Route path="/customer">
      <Customer />
    </Route>
    <Route path="/email">
      <Email />
    </Route>
    <Route path="/orderdetails">
      <OrderDetails />
    </Route>
    <Route path="/menulist">
      <MenuList />
    </Route>
    <Route path="/thankyou">
      <Thankyou />
    </Route>
    <Route path="/thankyoucontact">
      <ThankyouContact />
    </Route>
    </div>
  </Router>
)}
export default App;