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
    <meta name="description" content="Motasem Halawani Personal Website" />
    <title>Motasem Halawani</title>
    <link rel="canonical" href="https://mtsm.io" />
    <meta name="google-site-verification" content="jzmerGH9oJ26c3PpKqGDumkKPQ6vZRZLeDU449037Ko" />
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


