import React from 'react'

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="collapse navbar-collapse container" id="navbarColor01">
      <ul className="navbar-nav mr-auto">

        <li className="nav-item active">
          <a className="nav-link" href="#">People<span className="sr-only">(current)</span></a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Planets</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Starships</a>
        </li>

      </ul>
    </div>
  </nav>
)

export default NavBar
