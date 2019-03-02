import React from "react"

function Headernav(props) {
  return (
    <nav className="nav">
			<a className="nav__link link" href="#intro">
			<img alt="logo" width="50" src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"/>
			</a>
			<div className="nav__wrapper">
			<a className="nav__link link" href="#about">
				About
			</a>
			<a className="nav__link link" href="#work">
				Work
			</a>
			<a className="nav__link link" href="#contact">
				Contact
			</a>
			</div>
    </nav>
  )
}

export default Headernav