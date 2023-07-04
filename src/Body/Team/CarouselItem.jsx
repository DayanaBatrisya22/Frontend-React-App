import React from "react";

const CarouselItemOne = ({item}) => {
    return (
        <>
            <div className="carousel-item">
                <div className="card-container">
                    <div className="card">
                        <img className="carousel-img" src={item.icon.default} />
                        <h1 className="carousel-item-text"> {item.description}</h1>
                        <hr/>
                        <h2 className="carousel-item-position"> {item.position}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarouselItemOne