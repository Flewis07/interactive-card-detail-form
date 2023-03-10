import React from "react";

export default function CreditForm() {

    return(
        <div className="credit-form">
            <form action="">
                <div className="label-input">
                    <label htmlFor="">Cardholder name</label>
                    <input className="w-100 form-input" type="text" />
                </div>
                <div className="label-input">
                    <label htmlFor="">Card number</label>
                    <input className="w-100 form-input" type="text" placeholder="1234 5678 9123 0000"/>
                </div>
                <div className="d-flex">
                    <div className="expiration label-input">
                        <label htmlFor="">Exp. Date (MM/YY)</label>
                        <div className="w-100">
                            <input className="w-50 form-input" type="text" />
                            <input className="w-50 form-input" type="text" />
                        </div>
                    </div>
                    <div className="cvc w-50 label-input">
                        <label htmlFor="">CVC</label>
                        <div>
                            <input className="w-100 form-input" type="text" />
                        </div>
                    </div>
                </div>
                <button className="submit-button">Confirm</button>
            </form>
        </div>
    )
} 