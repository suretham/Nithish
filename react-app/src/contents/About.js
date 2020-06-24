import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class About extends Component {

    render() {
        return (
        <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <h4>Hey there,</h4>
            <h1>I'm Nithish Baba</h1>
            <h3>Student in Rowan University</h3>
            <br></br>
            <h1 className="subtopic">My Education</h1>
                <Widecard title="BS Computer Science" where="Rowan University" from="Aug 2017" to="May 2021"/>
            <br></br>
            <h1 className="subtopic">About this Project</h1>
            <p> I have taken Web Programming course in summer. This project is my
            class work required for the completion of the course. This project is a simple
            online ordering system for a Cafe. I have used HTML5, Nginx,
            ReactJS, Axios, Node.js, Express and MySQL for this project and deployed in AWS EC2. Visual Studio Code is
            used for developement.
            </p>
        </div>
)}
}
export default About