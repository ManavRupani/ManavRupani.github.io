import React from 'react'
import ReactDOM from 'react-dom/client'

import Footer from './components/Footer.tsx'
import Grid from './components/Grid.tsx'
import Hero from './components/Hero.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Hero/>
    <Grid/>
    <Footer/>
  </React.StrictMode>,
)
