import React from "react"
// const words = [' Hello!', 'My name is Motasem', 'I\'m a fullstack web developer']
import Lines from "react-svg-textures/es/Paths"
import Typist from 'react-typist'

const Texture = () => (
  <svg className="svg svg__header">
    <Lines
      id='pattern'
      d='woven'
      stroke='yellow'
      strokeWidth={2}
      orientation='vertical'
      size={7}
      shapeRendering='circle'
      background='blue'
    />
    <circle cx='50%' cy='90%' r='100%' fill='url(#pattern)' />
  </svg>
);
function Header(props) {

  return (
    <div className="header-wrapper">
    <Texture>
    </Texture>
    <header className="header">
      <Typist
        className="header__typist"
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
    </div>
   
  )
}



export default Header