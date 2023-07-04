import React, {useState} from "react";
import CarouselItem from "./CarouselItem";
import { dataItems } from "./DataItems";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
          newIndex = 0;
        } else if (newIndex >= dataItems.length) {
          newIndex = dataItems.length - 1;
        }
    
        setActiveIndex(newIndex);
      };

      return (
        <>
        
            <div className="carousel-container">
                <div className="carousel-buttons">
                    <button className="button-arrow" onClick={() => {updateIndex(activeIndex - 1);}}>
                        <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
                    </button>
                    <div className="carousel">
                        <div className="title-container">best team</div>
                        <div className="inner" style={{ transform: `translate(-${activeIndex * 100}%)`}}>
                            {dataItems.map((items, index) => {
                                return 
                                })}
                            <div className="carousel-card-container">
                                <div className="wrapper">
                                    {dataItems[0].map((items, index) => {
                                        return <CarouselItem item={items} width={"100%"} />;
                                        })}
                                </div>
                            </div>
                            <div className="carousel-card-container">
                                <div className="wrapper">
                                    {dataItems[1].map((items, index) => {
                                        return <CarouselItem item={items} width={"100%"} />;
                                        })}
                                </div>
                            </div>
                            <div className="carousel-card-container">
                                <div className="wrapper">
                                    {dataItems[2].map((items, index) => {
                                        return <CarouselItem item={items} width={"100%"} />;
                                        })}
                                </div>
                            </div>
                        </div>
                        <div className="indicators">{dataItems.map((item, index) => {
                            return (
                                <button className="indicator-buttons"onClick={() => {updateIndex(index);}}>
                                    <div
                                        className={`dot-navigation__item  ${
                                        index === activeIndex ? "dot-navigation__item--active" : "dot-navigation__item"
                                        }`}> 
                                    </div>
                                </button>
                                    );})}
                        </div>
                    </div>
                    <button className="button-arrow" onClick={() => {updateIndex(activeIndex + 1);}}>
                        <span class="material-symbols-outlined">arrow_forward_ios</span>{" "}
                    </button>
                </div>
            </div>
        </>
      );
}

export default Carousel