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
    <link rel="canonical" href="https://mtsm.io"/>
    <meta name="google-site-verification" content="jzmerGH9oJ26c3PpKqGDumkKPQ6vZRZLeDU449037Ko" />
    <meta property="og:image" content="https://mtsm.io/static/DSC03786-06c874e5e98fa1f4cfbb05f5220b279c.jpg"/>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://mtsm.io"/>
    <meta property="og:title" content="Motasem Halawani" />
    <meta property="og:description" content="Motasem Halawani Personal Website"/>
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


