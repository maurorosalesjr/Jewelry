import React from "react";
import insta from "./../img/insta.png";
import etsy from "./../img/etsy.png";
import ebay from "./../img/ebay.png";


const headerStyle = {
    fontFamily: "cursive",
    color: "#a23cf0",
}

const headerName = {
    marginTop: "5%",
    textAlign: "left",
    marginLeft: "2%",
}

const headerFluff = {
    textAlign: "right",
    marginRight: "2%",
    marginTop: "-4%",
}

const socialStyle = {
    maxWidth: "4%",
    maxHieght: "auto",
}

const socialStyle2 = {
    maxWidth: "3%",
}
function Header(){
    return(
        <React.Fragment>
            <script src="https://kit.fontawesome.com/db902ae8dc.js" crossOrigin="anonymous"></script>
            <div style={headerStyle} >
                <h1 style={headerName}>Tina Marie Jewelry</h1>
                    <div style={headerFluff}><a href="https://www.instagram.com/tina_maries_jewelry/?igshid=YmMyMTA2M2Y%3D" ><img src={insta} style={socialStyle} alt="link to Instagram" /></a> 
                    <a href="https://www.etsy.com/shop/TinaMariesJewelry" ><img src={etsy} style={socialStyle2} alt="link to Etsy"/></a>
                    <a href="https://www.ebay.com/usr/tina_maries_jewelry" ><img src={ebay} style={socialStyle} alt="link to Ebay"/></a></div>
                    
            </div>
        </React.Fragment>
    )
}


export default Header;