import React from "react";

const title = {
    fontFamily: "cursive",
    color: "#a23cf0",
    textAlign: "center",
    textDecoration: "underline",

}

const body = {
    fontFamily: "cursive",
    color: "#a23cf0",
    backgroundColor: "#d8b1f7",
}

function AboutMe() {
    return(
        <React.Fragment>
            <h1 style={title}>About Me!</h1>
            <div style={body}>
            <p>Hello,</p>
            <p>My name is Marie and I make every effort to sell my jewelry at fair prices. I stand behind my products 100%. If you are NOT satisfied with my jewelry, please return it within 30 days of receipt, as it was originally sent to you; and I will send a full refund for the returned item. Keep in mind that when returning an item, shipping may be charged to the person returning the item.</p>
            <p>I add items to our Etsy and eBay web-sites periodically based on the time of the year and season. Please visit frequently, you may find something for yourself, friends or loved ones. Thank you. Marie at Tina Marie's Jewelry</p>
            </div>
        </React.Fragment>
    )
}

export default AboutMe;