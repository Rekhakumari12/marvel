import React from 'react'
import '../containers/App.css'
import './style.css'
import logo from '../assets/logoblue.svg';
export default function Navbar() {
  return (
<nav className="navbar navbar-expand-md">
  <div className="container-fluid mx-3">
    <div><img src={logo} className="navbar-brand" /><span>| Developer</span></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Why Marvel
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Enterprise</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Sign in</a>
        </li>
      </ul>
        <button className="singup_btn" type="submit">Sign up free</button>
    </div>
  </div>
</nav>

  )
}
