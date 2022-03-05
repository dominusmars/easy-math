// import React from "react";
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';




function Navbar({gotoPage}) {


  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          
          <NavLink className="navbar-brand" extract to="/">
            React Multi-Page Website
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" extract to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <button onClick={()=>{
                    gotoPage("createTest")
                }}>
                  MakeTest
                </button>
                
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" extract to="/">
                  Tests
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );

}

export default Navbar;