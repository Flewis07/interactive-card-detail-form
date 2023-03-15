import React from "react";

export default function CreditForm() {

    return(
        <div className="credit-form">
            <form action="">
                <div className="label-input">
                    <label htmlFor="">Cardholder name</label>
                    <input className="w-100 form-input full-width-input" type="text" placeholder="e.g. Jane Appleseed"/>
                </div>
                <div className="label-input">
                    <label htmlFor="">Card number</label>
                    <input className="w-100 form-input full-width-input" type="text" placeholder="e.g. 1234 5678 9123 0000"/>
                </div>
                <div className="expirationcvc d-flex">
                    <div className="expiration label-input half-width-input">
                        <label htmlFor="">Exp. Date (MM/YY)</label>
                        <div className="w-100">
                            <input className="w-50 form-input" type="text" placeholder="MM"/>
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