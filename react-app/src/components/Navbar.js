import React, { Component } from 'react';
import Navitem from './NavItem';
class Navbar extends Component {
constructor(props)
{
    super(props);
    this.state={
        'NavItemActive':''
}
}
activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
        document.getElementById(this.state.NavItemActive).classList.remove('active');
    }
    this.setState({'NavItemActive':x},()=>{
    document.getElementById(this.state.NavItemActive).classList.add('active');
    });
};

render() {
return (
    <nav>
     <ul>
        <Navitem item="Home" tolink="/" displayText="Home" activec={this.activeitem}></Navitem>
        <Navitem item="Menu" tolink="/menulist" displayText="Cafe Menu" activec={this.activeitem}></Navitem>
        <Navitem item="Contact" tolink="/contact" displayText="Contact" activec={this.activeitem}></Navitem>
        <Navitem item="Order" tolink="/email" displayText="Order Online" activec={this.activeitem}></Navitem>
        <Navitem item="About" tolink="/about" displayText="About"  activec={this.activeitem}></Navitem>
     </ul>   
    </nav>
)}
}
export default Navbar