import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Customer extends Component {

    constructor(props) {
        super(props);
      
        this.state = 
        { 
           products: [], total: 0,
           customeremail: '',
           customername: '',
           customerphone: '',
           customer:'',
           
        }
      
      }  

      componentDidMount() {

        let tempEmail = localStorage.getItem('customerEmail')
        this.setState(
            {
                customeremail: tempEmail,
            })
      }
      handleInputChange = (e) => {

        this.setState({

            [e.target.name]: e.target.value

        });
    }

    handleSubmit = (e) => {

        e.preventDefault();


        const orderinfo = {
            "customeremail": this.state.customeremail,
            "customerphone": this.state.customerphone,
            "customername": this.state.customername
        }

        var orderinfoJson = JSON.stringify(orderinfo);

        console.log(orderinfoJson);

        var url3 = 'http://localhost:3200/api/customers';

        axios.post(url3, orderinfo)
                .then(response => response.data)
                .then(response => {
                    console.log(response);
                    localStorage.setItem('customerId', response.customerId);
                    localStorage.setItem('customerEmail', response.customerEmail);
                })
                .catch((e) => {

                    console.log(e);
                });

                this.setState(() => ({
                    navigateTo: 'foodmenu'
                  }))

    }
      render() {
    
        if (this.state.navigateTo === 'foodmenu') {
            return <Redirect to='/foodmenu' />
         }
        return (
        <div className="condiv">
 
           <div className="card" style={{ marginBottom: "10px"}}>
           <div className="card-body"></div>
           <screenLeft>
            <form onSubmit={this.handleSubmit}>
            <br></br>
            
                <h4 className="card-title">Customer Information</h4>
                <br></br>
                <table>
                <tr className="card-text"><td align="right">Email:&nbsp;</td>
                <td><input type = "text" onChange={this.handleInputChange} name= "customeremail"></input></td>
                </tr>
                <br></br>
                <tr><td align="right">Phone:&nbsp;</td>
                <td><input type = "text" onChange={this.handleInputChange} name= "customerphone"></input></td>
                </tr>
                <br></br>
                <tr className="card-text"><td align="right">Name:&nbsp;</td>
                <td><input type = "text" onChange={this.handleInputChange} name= "customername"></input></td>
                </tr>
                <br></br>
                </table>
                <br></br>
            </form>
            </screenLeft>
            <br></br> </div>
          
         
          <button className="btn btn-success float-right" 
                onClick={this.handleSubmit}>Continue</button> 
         
          <Link to="/"><button className="btn btn-primary float-right" 
            style={{ marginRight: "10px" }}>Cancel</button>
          </Link><br/><br/><br/>
        </div>
        );
      }

}
export default Customer
