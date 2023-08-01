import React, {useState} from 'react'
import './App.css'
import Education from './components/Education'
import Experience from './components/Experience'
import General from './components/General'

function App() {

  return (
    <div className="form">
      <General />
      <Education />
      <Experience />
    </div>
  )
}

export default App
