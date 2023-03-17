import React from "react";
import complete from "../assets/images/icon-complete.svg";

export default function Message(props){
    return(
        <div className="message-container">
            <div>
                <img src={complete} alt="image" />
            </div>
            <div>
                <h2>{props.title}</h2>
            </div>
            <div>
                <p>{props.text}</p>
            </div>
            <button className="submit-button" onClick={props.continue}>{props.btnText}</button>
        </div>
    )
}