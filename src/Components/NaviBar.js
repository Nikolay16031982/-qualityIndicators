import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function NaviBar(){
  return(
    <div>
   <Navbar collapseOnSelect expand = "lg" bg = "dark" variant = "dark">
   <Navbar.Brand> AAAAA</Navbar.Brand> 
   <Navbar.Toggle area-controls="responsiv-navbar-nav"/> 
      <Navbar.Collapse id="responsiv-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link><Link to="/">Parameters</Link></Nav.Link>
        <Nav.Link><Link to="/users">Charts</Link></Nav.Link>
        <Nav.Link><Link to="/about">Screenshots</Link></Nav.Link>
        <Nav.Link><Link to="/temp">Temp</Link></Nav.Link>
       </Nav>

       <Nav>
        <Button variant="primary" className="mr-2">Log In</Button>
        <Button variant="primary">Sign Out</Button>
        </Nav>  



      </Navbar.Collapse>   



    </Navbar>
    
  </div>  
)}