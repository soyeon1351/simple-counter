import React from 'react'
import './App.css'
import Viewer from "./component/Viewer"
import Controller from './component/Controller'

function App() {
  return(
    <div className='App'>
      <h1>SIMPLE COUNTER</h1>
      <section>
        <Viewer /> 
      </section>
      <section>
        <Controller /> 
      </section>
    </div>
  )
}

export default App
