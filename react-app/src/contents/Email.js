import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Email extends Component {

    constructor(props) {
        super(props);
      
        this.state = 
        { 
           customeremail:'',
           customername: '',
           customer: '',
           customerphone: '',

        }

        localStorage.removeItem('cart');
        localStorage.removeItem('customerId');
        localStorage.removeItem('customerEmail');
      
      }  
      handleInputChange = (e) => {

        this.setState({

            [e.target.name]: e.target.value

        });

    }

    decideNavigation(customer)
    {
      console.log(customer);

      var customerId = customer.customerId;
      
      if (customer.customerId ===undefined)
      {
        console.log(this.state.customeremail);

          localStorage.setItem('customerEmail',this.state.customeremail);

          this.setState(() => ({
            navigateTo: 'customer'
          }))
          
      }
      else
      {
          console.log(this.state.customer);
          localStorage.setItem('customerId', customerId);
          localStorage.setItem('customerEmail',this.state.customeremail);
          this.setState(() => ({
            navigateTo: 'foodmenu'
          }))

      }
    }

  
    handleSubmit = (e) => {

        e.preventDefault();

        
        var url2 = 'http://localhost:3200/api/customers/email' + '?customeremail=' 
                  + "'" + this.state.customeremail + "'";
  
                 fetch(url2)
                  .then(result => result.json())
                  .then(result => {

                      this.decideNavigation(result)
                    })

       console.log('customer found=' + this.state.customer);
        
    }

    render() {
      if (this.state.navigateTo === 'customer') {
        return <Redirect to='/customer' />
      }

      if (this.state.navigateTo === 'foodmenu')
      {
        return <Redirect to='/foodmenu' />
      }
      

        return (
        <div className="condiv">
        
        <div className="card" style={{ marginBottom: "10px"}}>
        <div className="card-body"></div>
        <screenLeft>
          <form onSubmit={this.handleSubmit}>
                <br></br>
                <table>
                <tr className="card-text"><td align="right">Email:&nbsp;</td>
                <td><input type = "text" onChange={this.handleInputChange} name= "customeremail"></input></td>
                </tr>
                </table>
                <br></br>
                <button className="btn btn-danger float-right" 
                        style={{ marginRight: "10px" }}>Submit</button>
                <br/><br/>
          </form>
        </screenLeft>
       
        </div>
        </div>
        );
      }

}
export default Email
