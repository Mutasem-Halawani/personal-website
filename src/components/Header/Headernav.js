import React from "react"
import Texture from '../Texture'
import MediaQuery from 'react-responsive'

const mobileWidth = 768

class Headernav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
			isMobile: null
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({ isActive: !this.state.isActive })
	}

	componentDidMount() {
		this.setState({ isMobile: window.innerWidth < mobileWidth })

	}

	render() {
		return (
			<div>
				<div className={`nav-container ${!this.state.isActive && this.state.isMobile ? 'd-none' : ''}`}>
					<MediaQuery minWidth={mobileWidth}>
						<Texture>
						</Texture>
					</MediaQuery>
					<nav className="nav header-nav container">
						<a onClick={this.toggle} className="nav__link link logo-wrapper" href="#intro">
							<h1>
								M
							</h1>
						</a>
						<div className="nav__wrapper">
							<a onClick={this.toggle} className="nav__link box-effect link" href="#about">
								About
							</a>
							<a onClick={this.toggle} className="nav__link box-effect link" href="#work">
								Projects
							</a>
							<a onClick={this.toggle} className="nav__link box-effect link" href="#contact">
								Contact
							</a>
						</div>
					</nav>
				</div>
				<MediaQuery maxWidth={mobileWidth - 1}>
					<button onClick={this.toggle} className={`hamburger hamburger--squeeze ${this.state.isActive ? 'is-active hamburger' : ''}" type="button`}>
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
					</button>
				</MediaQuery >
			</div >
		)
	}
}

export default Headernav