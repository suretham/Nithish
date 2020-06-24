import React, { Component } from 'react';

class CartItem extends Component {

  constructor(props) {
    super(props);
    this.state = {quantity: 1}
  }
  render(){
    const { product } = this.props;
    console.log(product);
    
    return (
      <div className="card" style={{ marginBottom: "10px"}}>
        <div className="card-body">
          <h5 className="card-text"> {product.name}
           <div className="float-right"><small>qty: </small>${product.qty}</div>
           <div className="float-right"><small>price: </small>${product.price}&nbsp;&nbsp;&nbsp;</div>
          
          </h5>

          <button className="btn btn-sm btn-warning float-right" 
              onClick={() => this.props.remove(product)}>Remove from cart</button>
        </div>
      </div>
     )
  }
}

export default CartItem