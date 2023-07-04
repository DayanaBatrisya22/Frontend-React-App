import React from "react";

function Socials(props) {
    return (
        <>
        <div className="socials">
            <img src={props.infoObject.facebook.default}/>
            <img src={props.infoObject.twitter.default}/>
            <img src={props.infoObject.google.default}/>
            <img src={props.infoObject.pinterest.default}/>
            <img src={props.infoObject.instagram.default}/>
        </div>
        </>
    )
}

export default Socials