import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <nav className="nav">
    <Link className="nav__item nav__item--left" to="#header">
      Glyn
    </Link>
    <Link className="nav__item" to="#skills">
      Skills
    </Link>
    <Link className="nav__item" to="#projects">
      Projects
    </Link>
    <Link className="nav__item" to="#blog">
      Blog
    </Link>
    <Link className="nav__item" to="#contact">
      Contact
    </Link>
    <i className="nav__item nav__item--hamburger fas fa-bars" />
  </nav>
)

export default Navbar
