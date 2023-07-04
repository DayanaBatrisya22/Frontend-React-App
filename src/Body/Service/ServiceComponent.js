import React from "react";
import ServiceCard from "./ServiceCard";
import ServiceCardLeft from "./ServiceCardLeft";
import { serviceInput , serviceInputTwo, serviceInputThree} from "./serviceData";

function Service() {
    return(
        <>
        <div className="title-container">
            what we do?
        </div>
        <div>
        {
            serviceInput.map( comment =>
                <ServiceCard infoObject = {comment}/>
            )
            
        }
        {
            serviceInputTwo.map( comment =>
                <ServiceCardLeft infoObject = {comment}/>
            )
        }
        {
            serviceInputThree.map( comment =>
                <ServiceCard infoObject = {comment}/>
            )
        }
        </div>
        </>
    )
}

export default Service