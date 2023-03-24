import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Welcome from './welcome'
import Dasntac from './dasntac'
import Inform from './inform'
import Footer from './footer'
import LanguageContext from './language'

function App() {
  return (
    <div className="App">
      <LanguageContext>
        <Header/>
        <Welcome />
        <Dasntac />
        <Inform />
        <Footer />
        </LanguageContext>
    </div>
  )
}

export default App
