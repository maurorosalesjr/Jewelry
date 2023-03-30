import React from "react";
import "./ButtonCss.css";

const topFoot = {
    backgroundColor: "#a23cf0",
    fontFamily: "cursive",
    color: "lightgrey",
    hight: "auto",
}

const footerStyle = {
    maxWidth: "50%",
    display: "block",
}


function Footer(){
    return(
        <React.Fragment>
            <div style={topFoot}>
                <h1>Thank you for visting Tina Marie Jewelry</h1>
                <div style={footerStyle}>
                <h5>You can find me at: 
                    ||<a href="https://www.instagram.com/tina_maries_jewelry/?igshid=YmMyMTA2M2Y%3D" class="link"> Instagram </a>
                    ||<a href="https://www.etsy.com/shop/TinaMariesJewelry" class="link"> Etsy </a>
                    ||<a href="https://www.ebay.com/usr/tina_maries_jewelry" class="link"> Ebay </a></h5>
                </div>
                <div >
                    <h5>Contact Info: </h5>
                    <p>email: fakeemail@fakeemailhost.com</p>
                    <p>Phone Number: 555-555-5555 </p>
                </div>
            </div>


        </React.Fragment>
    )
}

export default Footer;