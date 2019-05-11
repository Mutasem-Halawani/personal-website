import React from "react"
import { TextureFooter } from './Texture'

function Footer(props) {
  return (
    <div className="footer-wrapper">
      <TextureFooter>
      </TextureFooter>
      <footer className="footer">
        <div className="footer__wrapper container">
          <p>
            Built using
            <a 
              aria-label="Gatsby"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link link" 
              href="https://www.gatsbyjs.org/">
                Gatsby
            </a>
          </p>
          <nav className="nav footer__nav">
            <a 
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
              className="nav__link" 
              href="https://github.com/Mutasem-Halawani">
                <i className="icon fab fa-github"></i>
            </a>
            <a 
              aria-label="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="nav__link" 
              href="https://www.linkedin.com/in/motasem-halawani-5481b196/">
                <i className="icon fab fa-linkedin-in"></i>
            </a>
            <a 
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="nav__link" 
              href="https://twitter.com/MutasemHalawani">
                <i className="icon fab fa-twitter"></i>
            </a>
            <a 
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
              className="nav__link" 
              href="mailto:mtsmha@gmail.com">
                <i className="icon fas fa-envelope"></i>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Footer