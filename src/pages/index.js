import React from "react"
import Header from '../components/Header'
import Headernav from '../components/Headernav'
import Main from '../components/Main/Main'
import Footer from '../components/Footer'
// TODO: replace font awesome for production
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { Lines } from 'react-svg-textures';

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


