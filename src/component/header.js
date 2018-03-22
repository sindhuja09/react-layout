import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Nav extends React.Component {
    navigateServices() {
        const { history } = this.props;
        history.push("/Services");
      }
    render() {
     return (
      <header className="brand">   
      <img src="src/images/logo.png"/>
      <Router>
          <React.Fragment>
      <nav className="nav_bar" id="myNav">
              <Link to ="HOME" onClick={() => {
            this.navigateToServices();
          }}>HOME</Link>
              <Link to ="SERVICES">SERVICE</Link>  
      </nav>
      <Route exact path="/Home" component={Home} />
      <Route path="/services" component={Services} />
      </React.Fragment>
      </Router>
  </header>
   );
 }
}
const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  );
  const Services = () => (
    <div>
      <h2>Services</h2>
      <img src="src/images/logo.png"></img>
    </div>
  );
export default Nav;