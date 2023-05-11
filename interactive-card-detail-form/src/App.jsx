import { useState } from 'react';
import CreditForm from './components/CreditForm';
import Cards from './components/Cards';
import Message from './components/Message';
import './App.css'

export default function App() {

  const [name, setName] = useState("Jane Appleseed");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvc, setCvc] = useState("000");
  const [submited, setSubmited] = useState(false);
  const [cardErrorMsg, setCardErrorMsg] = useState("error-message hidden");

  const handleSubmit = () => {
    setSubmited(!submited);
  }

  const handleContinue = () => {
    setSubmited(!submited);
    setName("");
    setCardNumber("");
    setMonth("");
    setYear("");
    setCvc("");
  }

  return (
    <div className='container d-flex'>
      <Cards 
        name={name}
        cardNumber={cardNumber}
        month={month}
        year={year}
        cvc={cvc}
      />
      {
      !submited ?
        <CreditForm 
          newName={(newName) => setName(newName)}
          newCardNumber={(newCardNumber) => setCardNumber(newCardNumber)}
          newMonth={(newMonth) => setMonth(newMonth)}
          newYear={(newYear) => setYear(newYear)}
          newCvc={(newCvc) => setCvc(newCvc)}
          submit={handleSubmit}
          btnText="Submit"
          errorMsg={cardErrorMsg}
        />
        :
        <Message
          title="Thank you!"
          text="We've added your card details"
          btnText="Continue"
          continue={handleContinue}
        />
      }
    </div>
  )
}
