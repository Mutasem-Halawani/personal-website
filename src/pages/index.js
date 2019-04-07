import React from "react"
import Header from '../components/Header/Header'
import Headernav from '../components/Header/Headernav'
import Main from '../components/Main/Main'
import Footer from '../components/Footer'
// TODO: replace font awesome for production
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

export default () => (
  <div id="intro" className="app">
    <Headernav>
    </Headernav>
    <Header>
    </Header>
    <Main>
    </Main>
    <Footer>
    </Footer>
  </div>
)


