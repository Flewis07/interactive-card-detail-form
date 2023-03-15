import { useState } from 'react'
import CreditForm from './components/CreditForm'
import Cards from './components/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Jane Appleseed");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [month, setMonth] = useState("00");

  return (
    <div className='container d-flex'>
      <Cards 
        name={name}
        cardNumber={cardNumber}
        month={month}
      />
      <CreditForm 
        newName={(newName) => setName(newName)}
        newCardNumber={(newCardNumber) => setCardNumber(newCardNumber)}
        newMonth={(newMonth) => setMonth(newMonth)}
      />
    </div>
  )
}

export default App
