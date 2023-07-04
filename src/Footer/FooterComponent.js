import React from "react";
import Contact from "./Contacts";


function Footer() {
    return (
        <>
        <section id="footer">
            <div className="footer container">
                <div className="title-container">get in touch</div>
                <div className="details">
                    <Contact></Contact>
                </div>
                <div className="rights-container"> 
                    <h2> 2016 clemo.</h2>
                    <h4> all rights reserved</h4>
                </div>
            </div>
        </section>
        </>
    )
}

export default Footer