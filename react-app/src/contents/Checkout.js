import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Checkout extends Component {

    constructor(props) {
        super(props);
      
        this.state = 
        { 
           products: [], total: 0,
           customeremail:'',
           customername: '',
           customerphone: '',
           customer:'',
           
        }
      
      }  
      handleInputChange = (e) => {

        this.setState({

            [e.target.name]: e.target.value

        });
    }

    updateProducts(prd)
    {
       var tempProducts =  this.state.products;
      for (var i=0; i<tempProducts.length; i++)
      {
             tempProducts[i].idCustomerOrder = prd.idCustomerOrder;
      }    
      
      var url4 = 'http://localhost:3200/api/orderdetails';

      axios.post(url4, tempProducts)
              .then(response => response.data)
              .then(response => {

                  console.log(response);
                  
              })
              .catch((e) => {

                  console.log(e);
              });

      this.setState(() => ({
        products: tempProducts
      }))

      console.log(this.state.products);

      this.setState(() => ({
        navigateTo: 'thankyou'
      }))

    }

    handleSubmit = (e) => {

        e.preventDefault();

        const orderinfo = {
          "customerId": localStorage.getItem('customerId'),
          "orderValue": this.state.total
      }

      var orderinfoJson = JSON.stringify(orderinfo);

      console.log(orderinfoJson);

      var url3 = 'http://localhost:3200/api/customerorder';

      axios.post(url3, orderinfo)
              .then(response => response.data)
              .then(response => {

                  console.log(response);
                  this.updateProducts(response);
                  
              })
              .catch((e) => {

                  console.log(e);
              });

              this.setState(() => ({
                  navigateTo: 'thankyou'
                }))

       

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

      pay(data)
      {
          alert(data);
      }

     //pay = () => pay().then(data => alert(data)).catch(err => console.log(err))
      render() {
        if (this.state.navigateTo === 'thankyou') {
          return <Redirect to='/thankyou' />
        }
  
        const { products, total } =  this.state;
        return (
        <div className="condiv">
        
          <h3 className="card-title">Checkout</h3><hr/>
          <div className="card" style={{ marginBottom: "10px"}}>
          <div className="card-body"></div>
          <h4 className="card-title">Items</h4>
          <br></br>
          { products.map((product, index) => 
              <div key={index}>
              <p>{product.name} <small> (quantity: {product.qty})</small>
                 <span className="float-right text-primary">${product.qty * product.price}
              </span></p><hr/>
              </div>
          )} <hr/>
          { products.length ? 
          <div><h4><small>Total Amount:</small><span className="float-right text-primary">
                ${total}</span></h4><hr/>
          </div>: '' } </div>
          { !products.length ? <h3 className="text-warning">No item on the cart</h3>: ''}
        
          <Link to="/foodmenu">
                <button className="btn btn-primary float-left" style={{ marginRight: "10px" }}>Continue Shopping</button>
          </Link>
         
          { products.length ? <button className="btn btn-success float-right" 
                onClick={this.handleSubmit}>Submit</button>: '' }
          <Link to="/"><button className="btn btn-primary float-right" 
            style={{ marginRight: "10px" }}>Cancel</button></Link><br/><br/><br/>
        </div>
        );
      }

}
export default Checkout
