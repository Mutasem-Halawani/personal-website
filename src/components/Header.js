import React from "react"
import Typist from 'react-typist'

// const words = [' Hello!', 'My name is Motasem', 'I\'m a fullstack web developer'];

function Header(props) {
  return (
    <header className="header TypistExample-content">
      <Typist
        className="TypistExample-message"
        cursor={{ hideWhenDone: true, blink: true }}
      >
        Hello!
        <Typist.Backspace count={6} delay={1000} />
        <Typist.Delay ms={1250} />
        My name is Motasem
        <Typist.Backspace count={18} delay={1000} />
        <Typist.Delay ms={1250} />
        I'm a fullstack web developer
        <Typist.Backspace count={30} delay={1000} />
        <Typist.Delay ms={1250} />
      </Typist>
    </header>
  )
}

export default Header