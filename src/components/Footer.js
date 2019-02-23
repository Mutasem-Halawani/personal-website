import React from "react"

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p>
          Built using
          <a className="footer__link" href="https://www.gatsbyjs.org/">
            Gatsby
          </a>
        </p>
        <nav className="nav footer__nav">
          <a className="nav__link" href="https://github.com/Mutasem-Halawani">
            Github
          </a>
          <a className="nav__link" href="https://www.linkedin.com/in/motasem-halawani-5481b196/">
            Linkedin
          </a>
          <a className="nav__link" href="https://twitter.com/MutasemHalawani">
            Twitter
          </a>
          <a className="nav__link" href="mailto:mtsmha@gmail.com">
            Email
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer