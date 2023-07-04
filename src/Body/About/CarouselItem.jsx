import React from "react";

const CarouselItemOne = ({item}) => {
    return (
        <>
            <div className="carousel-item">
                <div className="card-container">
                    <div className="card">
                        <h1 className="carousel-item-text"> {item.title}<hr/></h1>
                        <h2 className="carousel-item-position"> {item.subTitle}</h2>
                        <h2 className="carousel-item-position"> {item.subTitleTwo}</h2>
                    </div>
                    <div className="buttons">
                        get in touch
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default CarouselItemOne