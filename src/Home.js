import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav,Navbar} from 'react-bootstrap'; 
import oi from "./Img/oi.jpg";
import yu from "./Img/yu.png";
import pp from "./Img/pp.png";
import az from "./Img/az.png";
import za from "./Img/za.png";





export default class Home extends Component {
  render() {
    return (
      
      <div>
       <Navbar bg="light" expand="lg">
       

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Item>
           <a href="/Dlogin" className="nav-link"><h5>Doctor</h5></a>
         </Nav.Item>
         <Nav.Item>
           <a href="/Form" className="nav-link"><h5>Patient</h5></a>
         </Nav.Item>
         <Nav.Item>
           <a href="/AdminLogin" className="nav-link"><h5>Admin</h5></a>
         </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
    

      
        <div className="container-fluid" style={{ width: "100%" , height: "auto" }}>
          <img src={oi} alt="Your Image" className="w-100" style={{ width: "100%", height: "auto" }} />
        </div>
        <br/>
     <hr/>
   
<hr/>
        <h1><center>Centers of Excellence</center></h1>
        <img src={yu} alt="New Image" style={{ width: "100%", height: "auto" }} />
        <img src={pp} alt="Image" style={{ width: "100%", height: "auto" }} />
        <img src={az} alt="aImage" style={{ width: "100%", height: "auto" }} />
        <img src={za} alt="zImage" style={{ width: "100%", height: "auto" }} />
        <div className="container mb-4">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2367844454413!2d80.24518431482235!3d13.043095090824986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f17e9dab9b3%3A0x7d4ce8f9631a8b61!2sSooriya%20Hospital!5e0!3m2!1sen!2sin!4v1625227856491!5m2!1sen!2sin"
            
            style={{ border: 0, width: '100%', height: '350px' }}
            allowFullScreen
          ></iframe>
        </div>
        <div style={{ textAlign: "center", margin: "20px" }}>
          &copy; 2023 Your Company. All rights reserved.
        </div>
        </div>
        
    );
  }
}
