import React, { Component } from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

class Cart extends Component {

constructor(props) {
  super(props);

  this.state = 
  { 
     products: [], total: 0
  }

}  


componentDidMount() {
    let cart = localStorage.getItem('cart');
    if (!cart) return; 

    var cartJson = JSON.parse(cart);
    var arr = [];
    Object.keys(cartJson).forEach(function(key) {
     arr.push(cartJson[key]);
    });

    var total = this.state.total;

    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        console.log(item);
        total += arr[i].price * arr[i].qty;
      }
    
    this.setState({ products: arr, total: total});
  
  }

removeFromCart = (product) => {
   // let products = this.state.products.filter((item) => item.id !== product.id);
    let products = this.state.products;
    let cart = JSON.parse(localStorage.getItem('cart'));
    let total = this.state.total - (product.qty * product.price)

    delete cart[product.idMenuItem.toString()];
    localStorage.setItem('cart', JSON.stringify(cart));
    
    for (var i = 0; i < products.length; i++) {
        var row = products[i];
    
        if (row.idMenuItem === product.idMenuItem)
        {
            products.splice(i,1);
            break;
        }
       
    }

    this.setState({products, total});
  }
  clearCart = () => {
    localStorage.removeItem('cart');
    this.setState({products: []});
  }

render() {
    const { products, total } =  this.state;

    return (
        <div className="condiv">
        <h3 className="card-title">Cart</h3>
        
        {
          products.map((product, index) => 
              <CartItem product={product} remove={this.removeFromCart} key={index}/>)
        } 

        { products.length ? 
          <div><h4>
            <small>Total Amount: </small>
            <span className="float-right text-primary">${total}</span>
          </h4><hr/></div>: ''}
        { !products.length ?<h3 className="text-warning">No item on the cart</h3>: ''}
        

        <Link to="/foodmenu">
                <button className="btn btn-primary float-left" style={{ marginRight: "10px" }}>Continue Shopping</button>
        </Link>
        <Link to="/checkout">
                <button className="btn btn-success float-right" style={{ marginRight: "10px" }}>Checkout</button>
        </Link>
           
        <button className="btn btn-primary float-right" onClick={this.clearCart} 
                style={{ marginRight: "10px" }}>Clear Cart
        </button>
 
       </div>
    )
}

}

    export default Cart