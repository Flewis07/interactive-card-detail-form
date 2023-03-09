import { useState } from 'react'
import CreditForm from './components/CreditForm'
import Cards from './components/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container d-flex'>
      <Cards />
      <CreditForm/>
    </div>
  )
}

export default App
