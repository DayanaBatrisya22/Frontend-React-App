import React from "react";
import Socials from "./Socials";
import { contactsData } from "./ContactsData";
import Connection from "./Contact";

function Contact(props) {
    return (
        <>
        <div className="details-container">
            <div className="info-card"> 
                {
                    contactsData[0].map ( comment =>
                        <Connection Object = {comment}/>
                        )
                }
                {
                    contactsData[1].map ( comment =>
                        <Socials infoObject = {comment}/>
                        )
                }
            </div>
            <div className="message-card"> 
                <form action="/action_page.php">
                    <input type="text" id="fname" name="firstname" placeholder="name"></input>
                    <input type="text" id="mail" name="email" placeholder="e-mail"></input>
                    <input type="text" id="ymessage" name="yourmessage" placeholder="your message"></input>
                </form>
                <div className="buttons">submit</div>
            </div>
        </div>
        </>
    )
}

export default Contact