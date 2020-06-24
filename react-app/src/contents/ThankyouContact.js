import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ThankyouContact extends Component {

 

      render() {
        return (
        <div className="condiv">
         <h3 className="card-title">Thanks for contacting us. We will respond to your email very soon.</h3><hr/>
        <Link to="/"><button className="btn btn-danger float-right" 
            style={{ marginRight: "10px" }}>Return to Home</button></Link><br/><br/><br/>
        </div>
        );
      }

}
export default ThankyouContact
