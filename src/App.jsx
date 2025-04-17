import './App.css'
import Viewer from "./component/Viewer"
import Controller from './component/Controller'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  return(
    <div className='App'>
      <h1>SIMPLE COUNTER</h1>
      <section>
        <Viewer count={count} /> 
        <Controller count={count} setCount={setCount} /> 
      </section>
    </div>
  )
}

export default App
