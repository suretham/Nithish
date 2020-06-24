import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class OrderDetails extends Component {

    constructor(props) {
        super(props);
      
        this.state = 
        { 
           products: [],
           
        }
      
      }  

    componentDidMount() {
    
       var url = 'http://localhost:3200/api/orderdetails' + '?customerId=' 
                  + localStorage.getItem('customerId');
     
      fetch(url)
        .then(result => result.json())
        .then(result => {
          this.setState({
            products: result,
          })
          
          console.log(this.state.products);
        })
      
      
    }

      render() {
        const { products} =  this.state;
        return (
        <div className="condiv">
         <h3 className="card-title">Order History</h3><hr/>
          <div className="card" style={{ marginBottom: "10px"}}>
          <div className="card-body"></div>
          <br></br>
          { products.map((product, index) => 
              <div key={index}>
              
               {(products[index-1] === undefined || (products[index].idCustomerOrder !== products[index-1].idCustomerOrder) ) ?
                <div className="card" style={{ marginBottom: "10px"}}>
                <div className="card-body" >
                <h5 className="card-text">Order Id: <small>{product.idCustomerOrder}</small>
                    <div className="float-right">Order Date: <small>{product.orderDate}</small></div>
                    <div className="float-right">Amount: <small>${product.orderValue}&nbsp;&nbsp;&nbsp;</small></div>
                </h5>
                </div> 
                 </div>:''}
                 <h5 className="card-text"> {product.name}
                     <div className="float-right"><small>qty:{product.qty}</small></div>
                     <div className="float-right"><small>price: ${product.price}&nbsp;&nbsp;&nbsp;</small></div>
                 </h5>
              </div>
          )} <hr/>
          </div>
         
          <Link to="/foodmenu"><button className="btn btn-danger float-right" 
            style={{ marginRight: "10px" }}>Return</button></Link><br/><br/><br/>
        </div>
        );
      }

}
export default OrderDetails
