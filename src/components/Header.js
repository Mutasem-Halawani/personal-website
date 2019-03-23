import React from "react"
import Lines from "react-svg-textures/es/Paths"
import Typed from 'react-typed'

/**
 * {@link https://github.com/mattboldt/typed.js}
 */
const Texture = () => (
  <svg className="svg svg__header">
    <Lines
      id='headerPattern'
      d='woven'
      stroke='gray'
      strokeWidth={2}
      orientation='vertical'
      size={7}
      shapeRendering='circle'
      background='black'
    />
    <circle cx='50%' cy='90%' r='100%' fill='url(#headerPattern)' />
  </svg>
);
function Header(props) {

  return (
    <div className="header-wrapper">
    <Texture>
    </Texture>
    <header className="header">
      <div className="header__welcome">
        <Typed
            strings={['Hello!', 'Welcome to my page.', 'Motasem']} 
            typeSpeed={70} 
            backSpeed={40} 
            showCursor={false}
        />
      </div>
      <div className="header__title">
        <Typed
          strings={[
            'Developer',
            'Entrepreneur',
            'Online Marketer'
          ]}
          startDelay={8000}
          typeSpeed={60}
          backSpeed={80} 
          attr="placeholder"
          loop >
          <input className="header__input" type="text"/>
        </Typed>
      </div>
    </header>
    </div>
   
  )
}



export default Header