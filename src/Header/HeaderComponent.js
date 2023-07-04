import React from "react";

function Header() {
    return (
        <>
        <section id="header">
        <div className="header container">
            <div className="nav-bar">
                <div class="brand">
                    <a href="#hero">
                    <h1>clemo.</h1>
                    </a>
                </div>
                <div class="nav-list">
                    <ul>
                        <li><a href="#about">about us</a></li>
                        <li><a href="#service" >services</a></li>
                        <li><a href="#work">works</a></li>
                        <li><a href="#team">team</a></li>
                        <li><a href="#testimonials">contact</a></li>
                    </ul>
                </div>

            </div>
        </div>
        </section>
        </>
    )
}

export default Header