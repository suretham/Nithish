import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
    <h1 className="subtopic">My Education</h1>
    <Widecard title="BS Computer Science" where="Rowan University" from="Aug 2017" to="May 2021"/>
    </div>
)
}
}
export default Education