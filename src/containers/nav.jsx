// import React from "react";
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';




function Navbar({gotoPage}) {


  return (
    <div className="navigation"  style = {{display: "flex",}}>
      <nav className="navbar navbar-expand navbar-dark bg-dark"  style={{ display: "inline" }}>
        <div className="container" style = {{display: "inline"}}>
        
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <button onClick={()=>{
                    gotoPage("Home")
                }}>
                  Home
                </button>
                {/* <NavLink className="nav-link" extract to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink> */}
              </li>
              <li className="nav-item">
                <button onClick={()=>{
                    gotoPage("createTest")
                }}>
                  MakeTest
                </button>
                
              </li>
              <li className="nav-item">
              <button onClick={()=>{
                    gotoPage("Tests")
                }}>
                  Tests
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );

}

export default Navbar;

// 