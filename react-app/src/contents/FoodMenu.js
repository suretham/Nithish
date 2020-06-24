import React, { Component } from 'react';
import MenuItem from './MenuItem';
import { getProducts } from '../repository';
import '../App.css';
import { Link } from 'react-router-dom';

class FoodMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {

      menuItems: [],
 

    }

  }
  // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
      
     
     getProducts().then((menuItems) =>this.setState({ menuItems }));      

    }
    render() {
      const { menuItems } =  this.state;

      console.log(menuItems);
      
      return (
        <div className="condiv">
          <h3 className="card-title">List of Available Products</h3><hr/>
        {menuItems.map((product, index) => <MenuItem product={product} key={index}/>)}
          <hr/>
          <Link to={{pathname:"/orderdetails"}}>
            <button className="btn btn-primary float-left" 
                style={{  marginRight: "10px" }}>My Orders</button>
          </Link>
          <Link to="/checkout">
            <button className="btn btn-success float-right" 
             style={{  marginRight: "10px" }}>Checkout</button>
          </Link>
          <Link to={{pathname:"/cart"}}>
            <button className="btn btn-primary float-right" 
                style={{  marginRight: "10px" }}>View Cart</button>
          </Link>
        </div>
      );
    }
  }

export default FoodMenu