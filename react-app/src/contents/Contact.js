import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Contact extends Component {

  constructor(props) {
    super(props);
  
    this.state = 
    { 
       customeremail:'',
       customercomment: '',
      
    }
  
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
      "customercomment": this.state.customercomment,
  }

  var orderinfoJson = JSON.stringify(orderinfo);

  console.log(orderinfoJson);

  var url3 = 'http://localhost:3200/api/contact';

  axios.post(url3, orderinfo)
          .then(response => response.data)
          .then(response => {
              console.log(response);
          })
          .catch((e) => {

              console.log(e);
          });

          this.setState(() => ({
            navigateTo: 'thankyoucontact'
          }))
}
render() {
  if (this.state.navigateTo === 'thankyoucontact') {
    return <Redirect to='/thankyoucontact' />
 }
return (
<div className="condiv">
    <h1 className="subtopic">Contact Me</h1>

    <div className="card" style={{ marginBottom: "10px"}}>
        <div className="card-body"></div>
        <screenLeft>
          <form onSubmit={this.handleSubmit}>
                <br></br>
                <table>
                <tr className="card-text"><td align="right">Enter your Email: &nbsp;</td>
                <td><input type = "text" onChange={this.handleInputChange} name= "customeremail"></input></td>
                </tr>
                <div classname = "spaceOption"><br></br></div>
                <tr className="card-text"><td align="right">Message: &nbsp;</td>
                <td><textarea rows="10" cols="50" onChange={this.handleInputChange} name= "customercomment"></textarea></td>
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
)}
}
export default Contact