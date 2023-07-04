import React from "react";

function ServiceCardLeft(props) {
    return (
        <>
        <div class="card-position">
            <div class="info-image"></div>
            <div class="info-card">
                <h3>{props.infoObject.subtitle}</h3>
                <h1>{props.infoObject.title} <hr/> </h1>
                <p>{props.infoObject.comment}</p>
                <p>{props.infoObject.secondcomment}</p>
                <div className="buttons">
                    learn more
                </div>
            </div>
        </div>
        
        </>
    )
}

export default ServiceCardLeft