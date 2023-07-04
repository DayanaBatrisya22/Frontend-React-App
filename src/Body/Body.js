import React from "react";
import About from "./About/AboutComponent"
import Service from "./Service/ServiceComponent";
import Work from "./Work/WorkComponent";
import Team from "./Team/TeamComponent";
import Testimonials from "./Testimonials/TestimonialsComponent";

function Body (){
    return(
        <>
        <section id="about">
            <div class="about container">
                <About></About>
            </div>
        </section>

        <section id="service">
            <div class="service container">
                <Service></Service>
            </div>
        </section>
        
        <section id="work">
            <div class="work container">
                <Work></Work>
            </div>
        </section>

        <section id="team">
            <div class="team container">
                <Team></Team>
            </div>
        </section>

        <section id="testimonials">
            <div class="testimonials container">
                <Testimonials></Testimonials>
            </div>
        </section>
        </>
    )
}

export default Body;