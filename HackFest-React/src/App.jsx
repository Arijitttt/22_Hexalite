import { useState } from 'react'
import './App.css'
import MappingData from './Map_Recomandation/MappingData'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MappingData/>
    </>
  )
}

export default App
