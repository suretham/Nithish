import React, { Component } from 'react';
import MenuListItem from './MenuListItem';
import { getProducts } from '../repository';
import '../App.css';
import { Link } from 'react-router-dom';

class MenuList extends Component {
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
          <h3 className="card-title">Our Menu</h3><hr/>
        {menuItems.map((product, index) => <MenuListItem product={product} key={index}/>)}
          <hr/>
          <Link to="/">
            <button className="btn btn-success float-right" 
             style={{  marginRight: "10px" }}>Cancel</button>
          </Link>
        </div>
      );
    }
  }

export default MenuList