//--6--
import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{ fontWeight: 'bold' }}>AgriEcoPath</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Vr">{props.Vr}</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/farmt">{props.farmt}</Link>
        </li> */}
        {/* <li className="nav-item">
          <Link className="nav-link" to="/Contact">{props.con}</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/User">{props.user}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sign">{props.sign}</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>&nbsp;&nbsp;&nbsp;
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Switch DarkMode</label>
      </div>
    </div>
  </div>
</nav>
</>
  )
}

Navbar.prototypes={
  title: PropTypes.String,
  about: PropTypes.String
}

Navbar.defaultProps={
  // title:"AgriEcoPath",
  about:"About",
  farmt:"Farm Tours",
  Resources:"Resources",
  Vr:"VR Experience",
  con:"Contact",
  user:"User Profile",
  sign:"Sign In"
}