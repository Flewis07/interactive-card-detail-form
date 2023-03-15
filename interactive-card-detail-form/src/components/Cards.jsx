import React from "react";
import logo from "../assets/images/card-logo.svg";

export default function Cards() {
    return(
        <div className='cards-image-section bg-active'>
          <div className='front-card white'>
            <div className='logo'>
              <img src={logo} alt="logo" />
            </div>
            <div className='card-number'>0000 0000 0000 0000</div>
            <div className='d-flex section3'>
              <div className='customer-name'>Jane Appleseed</div>
              <div className='expiration-date'>00/00</div>
            </div>
          </div>
          <div className='back-card white'>
            <div>000</div>
          </div>
      </div>
    )
}