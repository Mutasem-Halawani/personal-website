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
      stroke='#002f4b'
      strokeWidth={2}
      orientation='vertical'
      size={7}
      shapeRendering='circle'
      background='black'
    />
    <circle cx='50%' cy='90%' r='100%' fill='url(#headerPattern)' />
  </svg>
);
class Header extends React.Component {

  constructor() {
    super()
    this.state = {
      delay: 800
    }
  }

  render() {
    return (
      <div className="header-wrapper">
      <Texture>
      </Texture>
      <header className="header container">
        <div className="header__welcome">
          <Typed
            strings={['Motasem']} 
            typeSpeed={70} 
            backSpeed={40} 
            showCursor={false}
            onComplete={() => { this.setState({delay: 0}) }}
          />
          <Typed
            strings={[
              'Developer',
              'Entrepreneur',
              'Online Marketer'
            ]}
            startDelay={this.state.delay}
            typeSpeed={60}
            backSpeed={80}
            showCursor={false}
            attr="placeholder"
            loop >
            <input className="header__input" type="text"/>
          </Typed>
        </div>
      </header>
      </div>
    )
  }
}



export default Header