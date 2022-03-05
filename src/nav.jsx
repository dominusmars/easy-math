import React from "react";
import { NavLink } from "react-router-dom";


// We are using <NavLink> instead of <a> tag. 
// Clicking each link will route to the specific path described.

// <NavLink to="/">Home</NavLink> – The route to the home page that is http://localhost:3000
/* <NavLink to="/about">About</NavLink> – About page route that is, http://localhost:3000/test
<NavLink to="/contact">NavLink</Link> – Route to the contact page that is http://localhost:3000/pre-test
<NavLink to="/blog">Blog</NavLink> – Route to the blog page that is http://localhost:3000/blog */
//so on and so forth, you get the idea


function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            React Multi-Page Website
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;