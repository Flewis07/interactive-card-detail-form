import React, { useState } from "react";

export default function CreditForm(props) {

    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [month, setMonth] = useState("");

    const updateName = (event) => {
        setName(event.target.value);
        props.newName(name);
    }

    const updateCardNumber = (event) => {
        setCardNumber(event.target.value);
        props.newCardNumber(cardNumber);
    }

    const updateMonth = (event) => {
        setMonth(event.target.value);
        console.log(month);
        props.newMonth(month);
    }

    return(
        <div className="credit-form">
            <form action="">
                <div className="label-input">
                    <label htmlFor="">Cardholder name</label>
                    <input className="w-100 form-input full-width-input" type="text" placeholder="e.g. Jane Appleseed" onChange={(event) => updateName(event)}/>
                </div>
                <div className="label-input">
                    <label htmlFor="">Card number</label>
                    <input className="w-100 form-input full-width-input" type="text" placeholder="e.g. 1234 5678 9123 0000" onChange={(event) => updateCardNumber(event)}/>
                </div>
                <div className="expirationcvc d-flex">
                    <div className="expiration label-input half-width-input">
                        <label htmlFor="">Exp. Date (MM/YY)</label>
                        <div className="w-100">
                            <input className="w-50 form-input" type="text" placeholder="MM" onChange={(event) => updateMonth(event)}/>
                            <input className="w-50 form-input" type="text" placeholder="YY"/>
                        </div>
                    </div>
                    <div className="cvc w-50 label-input">
                        <label htmlFor="">CVC</label>
                        <div>
                            <input className="w-100 form-input half-width-input" type="text" placeholder="e.g. 123"/>
                        </div>
                    </div>
                </div>
                <button className="submit-button">Confirm</button>
            </form>
        </div>
    )
} 