import React from "react";


const headerStyle = {
    fontFamily: "cursive",
    color: "#a23cf0",
}

const headerName = {
    textAlign: "left",
    marginLeft: "2%",
}

const headerFluff = {
    textAlign: "right",
    marginRight: "2%",
    marginTop: "-4%",
}


function Header(){
    return(
        <React.Fragment>
            <script src="https://kit.fontawesome.com/db902ae8dc.js" crossOrigin="anonymous"></script>
            <div style={headerStyle} >
                <h1 style={headerName}>Tina Marie Jewelry</h1>
                {/* placeholders down */}
                <h5 style={headerFluff}>Instagram <i className="fa-brands fa-etsy" style={{color: "#a23cf0"}}></i>  Ebay</h5>
            </div>
        </React.Fragment>
    )
}

export default Header;