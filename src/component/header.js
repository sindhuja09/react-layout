import React, { Component } from 'react';

class Nav extends React.Component {
    render() {
     return (
 
      <header className="brand">   
      <img src="src/images/logo.png"/>
      <nav className="nav_bar" id="myNav">
              <a href="HOME">HOME</a>
              <a href="SERVICES">SERVICE</a>
              <a href="PORTFOLIO">PORTFOLIO</a>
              <a href="ABOUT">ABOUT</a>
              <a href="CLIENTS">CLIENTS</a>
              <a href="PRICE">PRICE</a>
              <a href="CONTACT">CONTACT</a>  
              {/* <a href="javascript:void(0);" style="font-size:15px;" className="icon" onclick="myFunction()">&#9776;</a>             */}
      </nav>
  </header>
   );
 }
}
export default Nav;