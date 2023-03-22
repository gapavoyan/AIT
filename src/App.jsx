import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Welcome from './welcome'
import Dasntac from './dasntac'
import Inform from './inform'
import Footer from './footer'

function App() {
  return (
    <div className="App">
     <Header/>
     <Welcome/>
     <Dasntac/>
     <Inform/>
     <Footer/>
    </div>
  )
}

export default App
