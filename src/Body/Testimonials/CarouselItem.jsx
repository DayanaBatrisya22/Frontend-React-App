import React from "react";

const CarouselItemOne = ({item}) => {
    return (
        <>
            <div className="carousel-item">
                <div className="title-container">
                    clients say's
                </div>
                <div className="card-container">
                    <div className="card">
                        <h1 className="carousel-item-text"> {item.description}<hr/></h1>
                        
                        <h2 className="carousel-item-position"> {item.position}</h2>
                    </div>
                    <div className="text">
                        <div className="carousel-item-comment">
                        <p >{item.comment}</p>
                        </div>
                        <div className="carousel-item-comment">
                        <p >{item.commentTwo}</p>
                        </div>
                        <div className="carousel-item-comment">
                        <p >{item.commentThree}</p>
                        </div>
                        <div className="carousel-item-comment">
                        <p >{item.commentFour}</p>
                        </div>
                    </div>
                </div>
                <div className="img-container">
                    <div className="image">
                        <img src={item.image.default}/>
                    </div>
                    <div className="image">
                        <img src={item.image.default}/>
                    </div>
                    <div className="image">
                        <img src={item.image.default}/>
                    </div>
                    <div className="image">
                        <img src={item.image.default}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarouselItemOne