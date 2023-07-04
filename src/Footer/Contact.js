import React from "react";

function Connection(props) {
    return (
        <>
        <div className="contacts"> 
            <h3>
            <i class="material-icons">location_on</i>
                {props.Object.address}
            </h3>
            <h3>
            <i class="material-icons">phone_iphone</i>
                {props.Object.mobile}
            </h3>
            <h3>
            <i class="material-icons">mail</i>
                {props.Object.mail}
            </h3>
        </div>
        </>
    )
}

export default Connection