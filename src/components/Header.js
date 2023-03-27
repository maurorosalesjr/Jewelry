import React from "react";


const headerStyle = {
    textAlign: "center",
    fontFamily: "cursive",
}


function Header(){
    return(
        <React.Fragment>
            <div style={headerStyle} >
                <h1>Tina Marie Jewelry</h1>
            </div>
        </React.Fragment>
    )
}

export default Header;