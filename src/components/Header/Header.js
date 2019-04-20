import React from "react"
import Typed from 'react-typed'
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
        <img alt="motasem-halawani-intro-background" className="header__img" src="../../../DSC03786.jpg" />
        <header className="header container">
          <div className="header__welcome">
            <Typed
              strings={['Motasem']}
              typeSpeed={70}
              backSpeed={40}
              showCursor={false}
              onComplete={() => { this.setState({ delay: 0 }) }}
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
              <input className="header__input" type="text" />
            </Typed>
          </div>
        </header>
      </div>
    )
  }
}



export default Header
