import React, { useState } from "react";

export default function CreditForm(props) {

    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvc, setCvc] = useState("");

    const updateName = (event) => {
        let newName = event.target.value;
        if(newName.length <= 25){
            setName(newName);
            props.newName(newName);
        }
    }
    
    const updateCardNumber = (event) => {
        let newCardNumber = event.target.value;
        let isnum = /^\d+$/.test(newCardNumber);
        if(newCardNumber.length > 0){
            if(newCardNumber.length <= 16 && isnum){
                setCardNumber(newCardNumber);
                props.newCardNumber(newCardNumber);
            }
        } else {
            setCardNumber("");
            props.newCardNumber(""); 
        }
    }

    const updateMonth = (event) => {
        let newMonth = event.target.value;
        let isnum = /^\d+$/.test(newMonth);
        if(newMonth.length > 0){
            if(newMonth.length <= 2 && isnum){
                setMonth(newMonth);
                props.newMonth(newMonth);
            }
        } else {
            setMonth("");
            props.newMonth("");
        }
    }

    const updateYear = (event) => {
        let newYear = event.target.value;
        let isnum = /^\d+$/.test(newYear);
        if(newYear.length > 0){
            if(newYear.length <= 2 && isnum){
                setYear(newYear);
                props.newYear(newYear);
            }
        } else {
            setYear("");
            props.newYear("");
        }
    }

    const updateCvc = (event) => {
        let newCvc = event.target.value;
        let isnum = /^\d+$/.test(newCvc);
        if(newCvc.length > 0){
            if(newCvc.length <= 3 && isnum){
                setCvc(newCvc);
                props.newCvc(newCvc);
            }
        } else {
            setCvc("");
            props.newCvc("");
        }
    }

    return(
        <div className="credit-form">
            <form action="">
                <div className="label-input">
                    <label htmlFor="">Cardholder name</label>
                    <input className="w-100 form-input full-width-input" type="text" placeholder="e.g. Jane Appleseed" value={name} onChange={(event) => updateName(event)}/>
                </div>
                <div className="label-input">
                    <label htmlFor="">Card number</label>
                    <input className="w-100 form-input full-width-input" type="text" placeholder="e.g. 1234 5678 9123 0000" value={cardNumber} onChange={(event) => updateCardNumber(event)}/>
                </div>
                <div className="expirationcvc d-flex">
                    <div className="expiration label-input half-width-input">
                        <label htmlFor="">Exp. Date (MM/YY)</label>
                        <div className="w-100">
                            <input className="w-50 form-input" type="text" placeholder="MM" value={month} onChange={(event) => updateMonth(event)}/>
                            <input className="w-50 form-input" type="text" placeholder="YY" value={year} onChange={(event) => updateYear(event)}/>
                        </div>
                    </div>
                    <div className="cvc w-50 label-input">
                        <label htmlFor="">CVC</label>
                        <div>
                            <input className="w-100 form-input half-width-input" type="text" placeholder="e.g. 123" value={cvc} onChange={(event) => updateCvc(event)}/>
                        </div>
                    </div>
                </div>
                <button className="submit-button">Confirm</button>
            </form>
        </div>
    )
} 