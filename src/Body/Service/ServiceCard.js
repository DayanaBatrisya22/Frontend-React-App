import React from "react";

function ServiceCard(props) {
    return (
        <>
        <div class="card-position">
            <div class="info-card">
                <h3>{props.infoObject.subtitle}</h3>
                <h1>{props.infoObject.title} <hr/> </h1>
                <p>{props.infoObject.comment}</p>
                <p>{props.infoObject.secondcomment}</p>
                <div className="buttons">
                    learn more
                </div>
            </div>
            <div class="info-image"></div>
        </div>
        
        </>
    )
}

export default ServiceCard