import React from "react";
import logo from "../assets/images/card-logo.svg";

export default function Cards(props) {
    return(
        <div className='cards-image-section bg-active'>
          <div className='front-card white'>
            <div className='logo'>
              <img src={logo} alt="logo" />
            </div>
            {
              props.cardNumber === "" ? <div className='card-number'>0000 0000 0000 0000</div> : <div className='card-number'>{props.cardNumber}</div>
            }
            <div className='d-flex section3'>
              {
                props.name === "" ? <div className='customer-name'>Jane Appleseed</div> : <div className='customer-name'>{props.name}</div>
              }
              <div className='expiration-date d-flex'>
                {
                  props.month === "" ? <div>00</div> : <div>{props.month}</div>
                }
                /
                {
                  props.year === "" ? <div>00</div> : <div>{props.year}</div>
                }
              </div>
            </div>
          </div>
          <div className='back-card white'>
            {
              props.cvc === "" ? <div>000</div> : <div>{props.cvc}</div>
            }
          </div>
      </div>
    )
}