import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Lines from "react-svg-textures/es/Paths"

const Texture = () => (
  <svg className="svg">
    <Lines
      id='footerPattern'
      d='woven'
      stroke='gray'
      strokeWidth={2}
      orientation='vertical'
      size={7}
      shapeRendering='circle'
      background='black'
    />
    <circle cx='50%' cy='90%' r='100%' fill='url(#footerPattern)' />
  </svg>
);

function Footer(props) {
  return (
    <div className="footer-wrapper">
      <Texture>
      </Texture>
      <footer className="footer">
        <div className="footer__wrapper">
          <p>
            Built using
            <a target="_blank" className="footer__link link" href="https://www.gatsbyjs.org/">
              Gatsby
            </a>
          </p>
          <nav className="nav footer__nav">
            <a target="_blank" className="nav__link" href="https://github.com/Mutasem-Halawani">
              <i className="icon fab fa-github"></i>
            </a>
            <a target="_blank" className="nav__link" href="https://www.linkedin.com/in/motasem-halawani-5481b196/">
              <i className="icon fab fa-linkedin-in"></i>
            </a>
            <a target="_blank" className="nav__link" href="https://twitter.com/MutasemHalawani">
              <i className="icon fab fa-twitter"></i>
            </a>
            <a target="_blank" className="nav__link" href="mailto:mtsmha@gmail.com">
              <i className="icon fas fa-envelope"></i>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Footer