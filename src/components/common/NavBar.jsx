import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBarLink = ({ to, label, currentPath }) => (
  <li className={`nav-item ${to === currentPath && 'active'}`}>
    <Link to={to} className="nav-link">{label}</Link>
  </li>
)

const NavBar = () => {
  const { pathname } = useLocation()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse container" id="navbarColor01">
        <ul className="navbar-nav mr-auto">

          <NavBarLink to='/people' label='People' currentPath={pathname} />

          <NavBarLink to='/planets' label='Planets' currentPath={pathname} />

          <NavBarLink to='/starships' label='Starships' currentPath={pathname} />

        </ul>
      </div>
    </nav>
  )
}

export default NavBar
