import React from 'react'
import Header from '../components/Header/Header'
import Headernav from '../components/Header/Headernav'
import Main from '../components/Main/Main'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

// TODO: replace font awesome for production
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

export default () => (
  <div id="intro" className="app">
  <Helmet>
    <meta charSet="utf-8" />
    <meta name="description" content="Motasem Halawni Personal Website" />
    <title>Motasem Halawni</title>
    <link rel="canonical" href="https://mtsm.io" />

  </Helmet>
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


