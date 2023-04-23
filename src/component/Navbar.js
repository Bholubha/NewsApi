import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div >
        {/* business
    entertainment
    general
    health
    science
    sports
    technology */}
        <nav className="navbar navbar-expand-lg bg-primary" style = {{position: 'fixed' ,width : '100%',zIndex :'2' }}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{fontSize :"25px",fontFamily:"cursive",marginLeft:"20px"}}>NEWS-Daily</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                
                <li className="nav-item">
                  <Link className="nav-Link active" style={{ fontSize :"20px" ,fontFamily:"fantasy",color: "rgba(52,53,65,var(--tw-bg-opacity))", margin: "9px" , textDecoration : "none" }} aria-current="page" to="/">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link active" style={{ fontSize :"20px" ,fontFamily:"fantasy",color: "black", margin: "9px" , textDecoration : "none"}} aria-current="page" to="/Business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link active" style={{ fontSize :"20px" ,fontFamily:"fantasy",color: "black", margin: "9px" ,  textDecoration : "none"}} aria-current="page" to="/Entertainment">Entertainment</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-Link active" style={{ fontSize :"20px" ,fontFamily:"fantasy",color: "black", margin: "9px", textDecoration : "none"}} aria-current="page" to="/Health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link active" style={{ fontSize :"20px" ,fontFamily:"fantasy",color: "black", margin: "9px" , textDecoration : "none" }} aria-current="page" to="/Science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link active" style={{ fontSize :"20px" ,fontFamily:"fantasy",color: "black", margin: "9px" , textDecoration : "none" }} aria-current="page" to="/Sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link active" style={{ fontSize :"20px" ,fontFamily:"fantasy",color: "black", margin: "9px" , textDecoration : "none" }} aria-current="page" to="/Technology">Technology</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-Link" to="/">Features</Link>
                </li>


              </ul>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}

export default Navbar