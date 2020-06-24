import React, { Component } from 'react';

class MenuItem extends Component {

constructor(props) {
  super(props);
  this.state = 
  {
    quantity: 1
  }
}

handleInputChange = event => 
this.setState({[event.target.name]: event.target.value});


addToCart = () => {

  let cart = localStorage.getItem('cart') 
                ? JSON.parse(localStorage.getItem('cart')) : {};
  let id = this.props.product.idMenuItem.toString();
  
  let item = this.props.product;
  item = (cart[id] ? cart[id]: item)
  item.qty = parseInt(this.state.quantity);
  cart[id] = item;

  localStorage.setItem('cart', JSON.stringify(cart));

  window.alert('Item ' + item.name + ' has been added to the cart')


}


render(){
  const { product } = this.props;
  return (
  <div className="card" style={{ marginBottom: "10px"}}>
    <div className="card-body">
    <h5 className="card-text"> {product.name}
           <div className="float-right"><small>price: </small>${product.price}</div></h5>
       <p className="card-text">{product.description}</p>
        <div>
           <button className="btn btn-sm btn-warning float-right" 
              onClick={this.addToCart}>Add to cart</button>
           <input type="number" value={this.state.quantity} name="quantity" 
              onChange={this.handleInputChange} className="float-right" 
              style={{ width: "60px", marginRight: "10px", borderRadius: "3px"}}/>
        </div> 
    </div>
  </div>
 )
}
}

export default MenuItem