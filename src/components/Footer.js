import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p>
          Built using
          <a className="footer__link link" href="https://www.gatsbyjs.org/">
            Gatsby
          </a>
        </p>
        <nav className="nav footer__nav">
          <a className="nav__link" href="https://github.com/Mutasem-Halawani">
            <i className="fab fa-github"></i>
          </a>
          <a className="nav__link" href="https://www.linkedin.com/in/motasem-halawani-5481b196/">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="nav__link" href="https://twitter.com/MutasemHalawani">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="nav__link" href="mailto:mtsmha@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </nav>
      </div>
      
    </footer>
  )
}

export default Footer