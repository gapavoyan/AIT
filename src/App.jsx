import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Welcome from './welcome'

function App() {
  return (
    <div className="App">
     <Header/>
     <Welcome/>
    </div>
  )
}

export default App
