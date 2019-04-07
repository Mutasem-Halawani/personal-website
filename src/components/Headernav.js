import React from "react"

function Headernav(props) {
  return (
		<div className="nav-container">
			<nav className="nav header-nav container">
				<a className="nav__link link logo-wrapper" href="#intro">
					<h1>
						M
					</h1>
				</a>
				<div className="nav__wrapper">
					<a className="nav__link box-effect link" href="#about">
						About
					</a>
					<a className="nav__link box-effect link" href="#work">
						Projects
					</a>
					<a className="nav__link box-effect link" href="#contact">
						Contact
					</a>
				</div>
			</nav>
		</div>
  )
}

export default Headernav