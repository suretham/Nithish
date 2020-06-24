import React, { Component } from 'react';

class MenuListItem extends Component {

  constructor(props) {
    super(props);
   
  }
render(){
  const { product } = this.props;
  return (
  <div className="card" style={{ marginBottom: "10px"}}>
    <div className="card-body">
    <h5 className="card-text"> {product.name}
           <div className="float-right"><small>price: </small>${product.price}</div></h5>
       <p className="card-text">{product.description}</p>
       
    </div>
  </div>
 )
}
}

export default MenuListItem