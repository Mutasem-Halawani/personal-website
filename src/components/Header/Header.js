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
        <header className="header container">
          <div className="header__welcome">
            <label htmlFor="developer">
              Developer, Doer, Builder
            </label>
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
                'Doer',
                'Builder',
              ]}
              startDelay={this.state.delay}
              typeSpeed={60}
              backSpeed={80}
              showCursor={false}
              attr="placeholder"
              loop >
              <input id="developer" className="header__input" type="text" />
            </Typed>
          </div>
        </header>
      </div>
    )
  }
}

export default Header
